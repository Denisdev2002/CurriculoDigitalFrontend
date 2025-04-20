// types.ts
export type ExperienceType = {
  companyName: string;
  jobDescription: string;
  workdescription?: string;
  imageCompanyUrl: string;
  personalInformationId: number;
  startDate: string;
  endDate: string | null;
};