import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PersonalInfo from '../components/PersonalInfo';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';
import Contato from '../components/Contato';
import ExperienceAccordion from '../components/ExperienceAccordion';
import '../types';


type ExperienceType = {
  companyName: string;
  jobDescription: string;
  imageCompanyUrl: string;
  personalInformationId: number;
  startDate: string;
  endDate: string | null;
};

type PersonalInfoType = {
  name: string;
  phone: string;
  location: string;
  email: string;
  apresentation: string;
  dateOfBirth: string;
};

type SocialMediaType = {
  name: string;
  linkPerfil: string;
  icon: string;
  personalInformationId: number;
};

export default function Home() {
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoType | null>(null);
  const [socials, setSocials] = useState<SocialMediaType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          'API-KEY': process.env.NEXT_PUBLIC_API_KEY || ''
        };        
        
        const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

        const [expRes, infoRes, socialRes] = await Promise.all([
          fetch(`${API_BASE_URL}/api/Experience`, { headers }),
          fetch(`${API_BASE_URL}/api/PersonalInformation`, { headers }),
          fetch(`${API_BASE_URL}/api/SocialMedia`, { headers }),
        ]);

        const expData = await expRes.json();
        const infoData = await infoRes.json();
        const socialData = await socialRes.json();

        setExperiences(expData);
        console.log('Dados de experiências:', expData);
        setPersonalInfo(infoData[0]);
        setSocials(socialData);
      } catch (err) {
        console.error('Erro ao buscar dados da API', err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Curriculo Digital</title>
        <meta name="description" content="Portfolio profissional desenvolvido em Next.js" />
      </Head>
      <main className="bg-background text-primary min-h-screen">
  <Header />

  {personalInfo && (
    <>
      <Hero
        name={personalInfo.name}
        apresentation={personalInfo.apresentation}
      />
        <PersonalInfo info={personalInfo} />
        <ExperienceAccordion experiences={experiences} />
        <SocialMedia
            socials={socials}
            email={personalInfo.email} 
        />
        <Contato email={personalInfo.email} />
        </>
    )}
    <Footer />
    </main>
    </>
  );
}