type IAddExperienceBtnProps = {
    experience: "Job" | "Education";
    onclick?: () => void;
};

export function AddExperienceBtn({
    experience,
    onclick
}: IAddExperienceBtnProps) {
    return (
        <button
            type="button"
            className="add-experience-btn cv-editor-label-input-container"
            onClick={onclick}>
            <span className="plus-icon">+</span>
            <span className="btn-text"> Add {experience}</span>
        </button>
    );
}