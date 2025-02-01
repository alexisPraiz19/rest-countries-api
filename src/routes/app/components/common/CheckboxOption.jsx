export default function CheckboxOption({ labelClass, inputName, inputClass, text, onChange }){

    return(
        <label className={labelClass}>
            <input type="checkbox" name={inputName} value={text} className={inputClass} onChange={onChange}/>
            { text }
        </label>
    )
}