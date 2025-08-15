import type { FacultyMember } from "@/lib/types";
import { FacultyCard } from "@/components/faculty-card";

const regularFaculty: FacultyMember[] = [
  {
    name: 'Dr. Imthias Ahamed',
    designation: 'Professor (On leave)',
    email: 'imthiasa@gmail.com',
    phone: '9895316268',
    profiles: {
      'TKM Profile': '#',
      'LinkedIn': '#',
    },
    bio: 'Imthias Ahamed T. P received the B.Tech. degree in electrical engineering from Kerala University, Thiruvananthapuram, India, in 1988, the M. Tech. degree in instrumentation and control from the National Institute of Technology Calicut, Kozhikode, India, in 1991, and the Ph.D. degree from the Indian Institute of Science, Bangalore, India, in 2002. He has 25 years of teaching and research experience, which include three years in Kind Saud University, Riyadh, Saudi Arabia and two years in Dhofar University, Salalah, Oman. He is currently working as Professor with the Centre for AI, Thangal Kunju Musaliar College of Engineering, Kollam, Kerala. His current research include reinforcement learning, demand response, neural networks, and power system scheduling and control.',
    areasOfInterest: ['Reinforcement Learning', 'Demand Response'],
    photoUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'male professor professional',
  },
  {
    name: 'Dr. Sumod Sundar',
    designation: 'HOD & Assoc. Professor',
    email: 'sumodsundar@tkmce.ac.in',
    phone: '8086515716',
    profiles: {
      'TKM Profile': '#',
      'Website': '#',
      'LinkedIn': '#',
    },
    bio: 'Dr. Sumod Sundar is Associate Professor in Centre for Artificial Intelligence, TKM College of Engg Kollam. He is a Corporate and ASAP certified trainer in the field of Machine Learning, Deep Learning & Data Science. He has completed his PhD in the topic Artificial Intelligence in Medical Image Diagnosis from VIT Vellore after his MTech from TKM College of Engineering. He has 9 year of teaching experience and acted as resource person over 65 sessions in Artificial Intelligence including AICTE, KTU FDPs and workshops. He has trained over 3000 Professionals, Employees and Students in Machine Learning, Deep Learning and Python so far. He has authored text book on Computer Programming and published various SCI/Scopus indexed journals. Established his expertise as a reviewer and chair for international conferences and have portfolio of AI projects in collaboration with government entities and startups. He was previously Academic Relations of IEEE Kerala Young Professionals. Now he is the Founding Secretary & Treasurer to ACM Kollam Chapter. His online session on Data science received Indian book of records, and also he received Best Faculty award in the year 2016.',
    areasOfInterest: ['Medical Imaging', 'Cyber Security using AI'],
    photoUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'male professor headshot',
  },
  {
    name: 'Dr. Chinnu Jacob',
    designation: 'Asst. Professor',
    email: 'chinnujacob@tkmce.ac.in',
    phone: '9446225465',
    profiles: {
      'TKM Profile': '#',
      'LinkedIn': '#',
    },
    bio: 'Dr. Chinnu Jacob is Assistant Professor at the Centre for Artificial Intelligence, TKM College of Engineering, Kollam. With nearly 12 years of teaching experience in various engineering colleges, she earned her B.Tech from Model Engineering College, CUSAT, and her M.Tech from College of Engineering Trivandrum. She has recently submitted her PhD thesis on "Detection, Classification, and Staging of Lung Cancer Using Deep Learning Techniques" under APJ Abdul Kalam Technological University (KTU). She has served as a resource person and conducted workshops on Python programming, machine learning, and deep learning techniques. She has established her expertise as a reviewer for international conferences and journals and by leading AI projects in collaboration with government entities and startups. She has published papers in SCI/SCOPUS journals and conferences.',
    areasOfInterest: ['Medical Imaging using AI', 'Data analytics using AI'],
    photoUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'female researcher smiling',
  },
  {
    name: 'Dr. Neena Aloysius',
    designation: 'Asst. Professor -Dept. of CSE',
    email: 'neenaa@tkmce.ac.in',
    phone: '9061414992',
    profiles: {
      'TKM Profile': '#',
      'LinkedIn': '#',
    },
    bio: 'Dr. Neena Aloysius received her Ph.D. in Computer Science and Engineering from Amrita Vishwa Vidyapeetham, India. Her Ph.D. research was fully funded by the Ministry of Electronics and Information Technology (MeitY),Government of India, during which she successfully developed AI models for real-time applications in collaboration with the Centre for Development of Advanced Computing (CDAC). She is an Assistant Professor in the Department of Computer Science and Engineering at TKMCE and a faculty member at the Centre for Artificial Intelligence, TKMCE. She has over nine years of research and industry experience, including more than four years as Deep Learning Engineer at Amrita Center for Research in Analytics, Technologies & Education (AmritaCREATE) and over five years as Senior Systems Engineer at Infosys Technologies Limited.',
    areasOfInterest: ['Machine Learning', 'Computer Vision', 'Pattern Recognition'],
    photoUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'professional woman glasses',
  },
];

const honoraryFaculty: FacultyMember[] = [
  {
    name: 'Dr. Santhi Natarajan',
    designation: 'Assoc. Professor, Dept of CSE - Research',
    affiliation: 'Shiva Nadar University, Chennai',
    email: 'santhin@snu.edu.in',
    profiles: {
      'Profile': '#',
    },
    photoUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'female professor portrait',
  },
];


export function FacultySection() {
  return (
    <>
      <section id="faculty" className="py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">Faculty</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Regular Department Faculty
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regularFaculty.map((member) => (
              <FacultyCard key={member.email} member={member} />
            ))}
          </div>
        </div>
      </section>
      <section id="associating-faculty" className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl text-secondary-foreground">Honorary Professor</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             {honoraryFaculty.map((member) => (
                <FacultyCard key={member.email} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
