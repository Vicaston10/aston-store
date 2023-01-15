import { FormInputLabel, Input, Group  } from "./form-input.style";

const FormInput = ({label, ...otherprops}) => {
    return (
        <Group>
            <Input {...otherprops}/> 
            { label && (
            <FormInputLabel 
                shrink={otherprops.value.length}
            >
                    {label}
                </FormInputLabel>
            )} 
        </Group>
    )
}

export default FormInput;