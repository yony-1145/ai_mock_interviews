import { Controller, FieldValues, Path, Control } from 'react-hook-form'
import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';


interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: 'text' | 'email'| 'password' | 'file'
}
// タイプの宣言、後で理解。Path<T>とControl<T>、<T>も

const FormField = <T extends FieldValues>({
  control, 
  name, 
  label, 
  placeholder, 
  type='text',
  }: FormFieldProps<T>) => {
  return(
    <Controller
    control={control} //　状態を管理 
    name={name} 
    render={({ field }) => (
      <FormItem>
        <FormLabel className='label'>{label}</FormLabel>
        <FormControl>
          <Input 
            className="input" 
            placeholder={placeholder} 
            type={type}
            {...field} 
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
    />
  );  
};

export default FormField
