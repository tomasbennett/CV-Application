// import React, { useState } from "react";
// import { IEducation, IFormData, IWorkExperience, educationSchema } from "../../../models/FormData";
// import { AddExperienceBtn } from "./AddExperience";
// import { ExperienceSelectBtn, EducationExperienceForm } from "./ExperienceSelectBtn";
// import { EditFormContainer } from "./FormEditable";
// import { FormUtilBtns } from "./FormUtilBtns";
// import { IFormTogglable } from "../../../models/Collapsable";



// import { ZodObject, ZodRawShape, ZodString } from "zod";
// import { dateRangeSchema } from "../../../models/DateRange";

// type SchemaWithIdAndDates = ZodObject<
//   ZodRawShape & {
//     id: ZodString;
//     dates: typeof dateRangeSchema;
//   }
// >;




// type ISelectableFormsProps<T extends IWorkExperience | IEducation, K extends ZodObject<any>> = {
//     formLegend: string;
//     isOpenInitial: IFormTogglable;
//     formInputNames: Record<keyof Omit<T, "id" | "dates">, string>;
//     schema: K & SchemaWithIdAndDates;

//     experienceArray: T[];
// };

// export function SelectableForms<T extends IWorkExperience | IEducation, K extends ZodObject<any>>({ //We can look to be more specific on the any type here
//     formLegend,
//     isOpenInitial,
//     formInputNames,
//     schema,

//     experienceArray,
// }: ISelectableFormsProps<T, K>) {
//     type IFormInputNames = typeof formInputNames;

//     const [selectIsOpen, setSelectIsOpen] = useState<{ isOpen: IFormTogglable; payload: Omit<T, "id"> & { saveFunction: (formData: Omit<T, "id">) => void } | null; }>({
//         isOpen: "closed",
//         payload: null
//     });

//     const isOpen = selectIsOpen.isOpen;

//     return (
//         <EditFormContainer
//             legendText={formLegend}
//             isOpenInitial={isOpenInitial}
//             onSubmit={(e) => {
//                 e.preventDefault();

//                 const formData = new FormData(e.currentTarget);

//                 const startDateValue = formData.get("startDate");
//                 const endDateValue = formData.get("endDate");

//                 const formObj: Partial<T> = {};

//                 for (const key of Object.keys(formInputNames) as Array<keyof IFormInputNames>) {
//                     const typedKey = key;
//                     const inputName = formInputNames[typedKey];
//                     formObj[typedKey] = (formData.get(inputName)?.toString() ?? "") as T[typeof typedKey];
//                 }

//                 formObj["dates"] = {
//                     startDate: typeof startDateValue === "string"
//                         ? new Date(startDateValue)
//                         : new Date("2020-01-01"),
//                     endDate: typeof endDateValue === "string"
//                         ? new Date(endDateValue)
//                         : new Date("2025-01-01")
//                 };

//                 // const formObj: Partial<IEducation> = {
//                 //     institution: formData.get("institution")?.toString() ?? "",
//                 //     degree: formData.get("degree")?.toString() ?? "",
//                 //     dates: {
//                 //         startDate: typeof startDateValue === "string"
//                 //             ? new Date(startDateValue)
//                 //             : new Date("2020-01-01"),
//                 //         endDate: typeof endDateValue === "string"
//                 //             ? new Date(endDateValue)
//                 //             : "Present"
//                 //     }
//                 // };

//                 const schemaWithoutId = schema.omit({ id: true });

//                 if (schemaWithoutId.safeParse(formObj).success) {

//                     selectIsOpen.payload?.saveFunction(formObj as Omit<T, "id">);
//                     setSelectIsOpen({
//                         isOpen: "closed",
//                         payload: null
//                     });

//                     return;

//                 }

//             }}>
                
//             {isOpen === "closed" || selectIsOpen.payload === null ?
//                 <> 
//                     <div className="experience-selection-entries"> {/* education-entries */}
//                         {experienceArray.map((edu: T) => (
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
//                                         endDate: new Date("01/01/2025")
//                                     },
//                                     saveFunction: (data: T) => {
//                                         // Here we want to add the new education entry to the state
//                                         setState((prev: IFormData) => ({
//                                             ...prev,
//                                             education: [...prev.education, {
//                                                 id: crypto.randomUUID(),
//                                                 institution: data.institution ?? "",
//                                                 degree: data.degree ?? "",
//                                                 dates: data.dates ?? { startDate: new Date("01/01/2020"), endDate: new Date("01/01/2025") }
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

//                                 setSelectIsOpen({
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