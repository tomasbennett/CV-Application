type IAddExperienceBtnProps = {
    experience: "Job" | "Education";
};

export function AddExperienceBtn({
    experience
}: IAddExperienceBtnProps) {
    return (
        <button
            type="button"
            className="add-experience-btn cv-editor-label-input-container">
            <span className="plus-icon">+</span>
            <span className="btn-text"> Add {experience}</span>
        </button>
    );
}