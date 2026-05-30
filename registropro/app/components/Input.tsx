type Props = {
    text: string;
    onChange: (value: string) => void;
    placeholder?: string;
    value: string;
}

export const Input = ({text,onChange,placeholder,value}: Props)=>{



    return(
        <input
            className= 'border-4 rounded-xl bg-blue text-red-500  ' 
            type="text" 
            placeholder={placeholder} 
            value={value} 
            onChange={(e) => onChange(e.target.value)} 
        />
    )
}