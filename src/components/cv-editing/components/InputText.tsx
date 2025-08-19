import React, { HTMLInputTypeAttribute } from "react";

export type InputTextProps = {
    type?: HTMLInputTypeAttribute;
    id: string;
    name: string;
    placeholder?: string;
};


export function CVInputContainer({
    label,
    type,
    id,
    name,
    placeholder = "",
    children
}: InputTextProps & {
    label: string;
    children: React.ReactElement<InputTextProps>;
}) {
    return (
        <div className={`cv-editor-label-input-container label-input-container-${type ?? children.type.toString()}`}>
            <label htmlFor={id}>{label}</label>
            {children ? (React.cloneElement(children, { type, id, name, placeholder })) : null}
        </div>
    );
}

