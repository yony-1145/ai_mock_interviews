import Agent from '@/app/components/Agent';
import DisplayTechIcons from '@/app/components/DisplayTechIcons';
import { getCurrentUser } from '@/lib/actions/auth.action';
import { getInterviewsById } from '@/lib/actions/general.action';
import { getRandomInterviewCover } from '@/lib/utils';
import Image from 'next/image';
import { redirect } from 'next/navigation';

const Page = async ({params}: RouteParams) => {
    const { id } = await params;
    const interview = await getInterviewsById(id);
    const user =  await getCurrentUser();

    if(!interview) redirect('/');

    return (
        <>
            <div className='flex flex-row gap-4 justify-between'>
                <div className='flex flex-row gap-4 item-center max-sm:flex-col'>
                    <div className='flex flex-row gap-4'>
                        <Image src={getRandomInterviewCover()} alt="cover-image" width={40} height={40} className="rounded-full object-cover size-[40]" />
                        <h3 className='capitalize'>{interview.role}</h3>
                    </div>
                    <DisplayTechIcons techStack={interview.techstack}/>
                </div>
                <p className='bg-dark-200 px-4 py-2 rounded-lg h-fit capitalize'>{interview.type}</p>
            </div>

            <Agent
            userName={user?.name!}
            // type={user?.id}
            interviewId={id}
            type="interview"
            questions={interview.questions}
            />
        </>
    )
}

export default Page