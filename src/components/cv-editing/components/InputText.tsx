import React, { HTMLInputTypeAttribute } from "react";

export type InputTextProps = {
    type?: HTMLInputTypeAttribute;
    id: string;
    name: string;
    placeholder?: string;
    value?: string;
};


export function CVInputContainer({
    label,
    type,
    id,
    name,
    placeholder = "",
    value,
    children
}: InputTextProps & {
    label: string;
    children: React.ReactElement<InputTextProps>;
}) {

    return (
        <div className={`cv-editor-label-input-container label-input-container-${type ?? children.type.toString()}`}>
            <label htmlFor={id}>{label}</label>
            {children ? (React.cloneElement(children, { type, id, name, placeholder, value })) : null}
        </div>
    );
}

export const CVInputContainerMemo = React.memo(CVInputContainer, (prev, next) => {
    return prev.value === next.value &&
        prev.placeholder === next.placeholder &&
        prev.type === next.type &&
        prev.id === next.id &&
        prev.name === next.name &&
        prev.label === next.label;
});