// import React from "react";
// import { IEducation, IFormData, IWorkExperience, educationSchema } from "../../../models/FormData";
// import { AddExperienceBtn } from "./AddExperience";
// import { ExperienceSelectBtn, EducationExperienceForm } from "./ExperienceSelectBtn";
// import { EditFormContainer } from "./FormEditable";
// import { FormUtilBtns } from "./FormUtilBtns";
// import { IFormTogglable } from "../../../models/Collapsable";

// type ISelectableFormsProps = {
//     // Add props if needed
//     formLegend: string;
//     isOpenInitial: IFormTogglable;
// };

// export function SelectableForms<T extends IWorkExperience | IEducation>({
//     formLegend,
//     isOpenInitial
// }: ISelectableFormsProps) {


//     return (
//         <EditFormContainer
//             legendText={formLegend}
//             isOpenInitial={isOpenInitial}
//             onSubmit={(e) => {
//                 e.preventDefault();

//                 const formData = new FormData(e.currentTarget);

//                 const startDateValue = formData.get("startDate");
//                 const endDateValue = formData.get("endDate");

//                 const formObj: Partial<IEducation> = {
//                     institution: formData.get("institution")?.toString() ?? "",
//                     degree: formData.get("degree")?.toString() ?? "",
//                     dates: {
//                         startDate: typeof startDateValue === "string"
//                             ? new Date(startDateValue)
//                             : new Date("2020-01-01"),
//                         endDate: typeof endDateValue === "string"
//                             ? new Date(endDateValue)
//                             : "Present"
//                     }
//                 };

//                 const educationSchemaWithoutId = educationSchema.omit({ id: true });

//                 if (educationSchemaWithoutId.safeParse(formObj).success) {
//                     handleFormCurr.payload?.saveFunction(formObj as IEducation);
//                     setFormState({
//                         isOpen: "closed",
//                         payload: null
//                     });

//                     return;

//                 }

//             }}>

//             {isOpen === "closed" || handleFormCurr.payload === null ?
//                 <>
//                     <div className="experience-selection-entries education-entries">
//                         {educationSummary.map((edu: IEducation) => (
//                             <React.Fragment key={edu.id}>

//                                 <ExperienceSelectBtn
//                                     btnTitle={edu.institution}
//                                     onclick={() => {
//                                         setFormState({
//                                             isOpen: "open",
//                                             payload: {
//                                                 institution: edu.institution,
//                                                 degree: edu.degree,
//                                                 dates: edu.dates,
//                                                 saveFunction: (data: IEducation) => {
//                                                     // Here we want to update the existing education entry in the state
//                                                     setState((prev: IFormData) => {
//                                                         const updatedEducation = prev.education.map((e) => e.id === edu.id ?
//                                                             { ...e, ...data }
//                                                             : e);
//                                                         return { ...prev, education: updatedEducation };
//                                                     });
//                                                 }

//                                             }
//                                         });
//                                     }}
//                                     delClick={(e) => {
//                                         e.stopPropagation();
//                                         e.preventDefault();

//                                         setState((prev: IFormData) => {
//                                             const updatedEducation = prev.education.filter((ed) => ed.id !== edu.id);
//                                             return { ...prev, education: updatedEducation };
//                                         });
//                                     }}
//                                 />

//                             </React.Fragment>
//                         ))}
//                     </div>
//                     <AddExperienceBtn
//                         experience="Education"
//                         onclick={() => {
//                             setFormState({
//                                 isOpen: "open",
//                                 payload: {
//                                     institution: "",
//                                     degree: "",
//                                     dates: {
//                                         startDate: new Date("01/01/2020"),
//                                         endDate: "Present"
//                                     },
//                                     saveFunction: (data: IEducation) => {
//                                         // Here we want to add the new education entry to the state
//                                         setState((prev: IFormData) => ({
//                                             ...prev,
//                                             education: [...prev.education, {
//                                                 id: crypto.randomUUID(),
//                                                 institution: data.institution ?? "",
//                                                 degree: data.degree ?? "",
//                                                 dates: data.dates ?? { startDate: new Date("01/01/2020"), endDate: "Present" }
//                                             }]
//                                         }));
//                                     }
//                                 }
//                             });
//                         }}
//                     />
//                 </>
//                 :
//                 <>
//                     <div className="full-selectable-form-container">
//                         <EducationExperienceForm
//                             degree={handleFormCurr.payload?.degree}
//                             institution={handleFormCurr.payload?.institution}
//                             dates={handleFormCurr.payload?.dates} />
//                         <FormUtilBtns
//                             onCancelClick={(e) => {
//                                 e.preventDefault();

//                                 setFormState({
//                                     isOpen: "closed",
//                                     payload: null
//                                 });
//                             }}
//                         />
//                     </div>

//                 </>
//             }

//         </EditFormContainer>
//     );
// }   