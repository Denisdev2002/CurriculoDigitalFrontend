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

export type CourseType = {
  curso: string;
  instituicao: string;
  dataInicio: string;
  dataFim: string;
  descricao: string;
  status: string;
};