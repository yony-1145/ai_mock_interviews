import { db } from "@/app/firebase/admin";

export async function getInterviewsByUserId(userId: string): Promise<Interview[]>{ 
    const interviews = await db
    .collection('interviews')
    .where('userId', '==', userId)
    .orderBy('createdAt', 'desc')
    .get();  //nullでは値は返らない、なければ空配列
  
    return interviews.docs.map((doc)=> ({
      id: doc.id,
      ...doc.data()
    })) as Interview[];
}
  
export async function getLatestInterviews(params: GetLatestInterviewsParams): Promise<Interview[]>{ 
    const {userId, limit = 20} = params;
    
    const interviews = await db
    .collection('interviews')
    .orderBy('createdAt', 'desc')
    .where('finalized', '==', true)
    .where('userId', '!=', userId)
    .limit(limit)
    .get();  //nullでは値は返らない、なければ空配列
  
    return interviews.docs.map((doc)=> ({
      id: doc.id,
      ...doc.data()
    })) as Interview[];
  
}

export async function getInterviewsById(id: string): Promise<Interview|null>{ 
    const interview = await db
    .collection('interviews')
    .doc(id)
    .get();
    return interview.data() as Interview | null;
}
