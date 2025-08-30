import { MouseEventHandler } from 'react';

import "./FormUtilBtns.css";

type UtilBtnProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

export function DeleteBtn({ onClick }: UtilBtnProps) {
    return (
        <button onClick={onClick} type="button" className="delete-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>delete bin</title>
                <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" />
            </svg>
        </button>
    );
}

export function SaveBtn({ onClick }: UtilBtnProps) {
    return (
        <button onClick={onClick} type="button" className="save-btn">
            Save
        </button>
    );
}

export function CancelBtn({ onClick }: UtilBtnProps) {
    return (
        <button onClick={onClick} type="button" className="cancel-btn">
            Cancel
        </button>
    );
}



type FormUtilBtnsProps = {
    onSaveClick?: MouseEventHandler<HTMLButtonElement>;
    onCancelClick?: MouseEventHandler<HTMLButtonElement>;
};

export function FormUtilBtns({ onSaveClick, onCancelClick }: FormUtilBtnsProps) {
    return (
        <div className="form-util-btns-container">
            <SaveBtn onClick={onSaveClick} />
            <CancelBtn onClick={onCancelClick} />
        </div>
    );
}
