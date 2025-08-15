'use client';

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, ExternalLink } from 'lucide-react';
import type { Publication } from '@/lib/types';
import { Badge } from '../ui/badge';

const publicationsData: Publication[] = [
  // Journal Publications
  { id: 1, type: 'journal', year: 2024, authors: 'Rufus, Sreehari S., & Anzar S. M.', title: 'The robust SmartEnsembleNet: A game changer in finger knuckle biometrics.', venue: 'Expert Systems with Applications, 124810.', link: 'https://doi.org/10.1016/j.eswa.2024.124810', notes: 'SCI and Scopus Indexed, Impact Factor 7.5, Science Direct Q1 journal' },
  { id: 2, type: 'journal', year: 2024, authors: 'Sumod S., Subramanian S., & Mahmud M.', title: 'Classification of Diabetic Retinopathy Disease Levels by Extracting Spectral Features Using Wavelet CNN.', venue: 'Diagnostics, 14(11), 1093.', link: 'https://doi.org/10.3390/diagnostics14111093', notes: 'SCI and Scopus Indexed, Impact Factor 3.6, MDPI Q2 journal' },
  { id: 3, type: 'journal', year: 2024, authors: 'Abdul Rahim; Sabeena Beevi', title: 'Efficient mitosis detection: leveraging pre-trained faster R-CNN and cell-level classification.', venue: 'Biomedical Physics & Engineering Express, 10(2), 025031.', link: 'https://doi.org/10.1088/2057-1976/ad262f', notes: 'SCI and Scopus Indexed, Impact Factor 1.3, IOP Publishing' },
  { id: 4, type: 'journal', year: 2024, authors: 'Chinnu J., Menon G. C.', title: 'A Hybrid Attention-based Deep Model for Lung Cancer Subtype Classification from Multimodality Images.', venue: 'International Journal on Artificial Intelligence Tools, 33(01).', link: 'https://doi.org/10.1142/s0218213023500525', notes: 'SCI and Scopus Indexed, Impact Factor 1.1, World Scientific journal' },
  { id: 5, type: 'journal', year: 2023, authors: 'Abdul Rahim; Sabeena Beevi', title: 'Multi CNN based automatic detection of mitotic nuclei in breast histopathological images.', venue: 'Computers in Biology and Medicine, 158, 106815.', link: 'https://doi.org/10.1016/j.compbiomed.2023.106815', notes: 'SCI and Scopus Indexed, Impact Factor 7.0, Science Direct Q1 journal' },
  { id: 6, type: 'journal', year: 2023, authors: 'Sumod S., Sumathy S.', title: 'Classification of Diabetic Retinopathy disease levels by extracting topological features using Graph Neural Networks.', venue: 'IEEE Access.', link: 'https://doi.org/10.1109/ACCESS.2023.3279393', notes: 'SCI and Scopus Indexed, Impact Factor 3.476, IEEE Q1 journal' },
  { id: 7, type: 'journal', year: 2023, authors: 'Sumod S., Sumathy S.', title: 'An effective deep learning model for grading abnormalities in retinal fundus images using variational auto-encoders.', venue: 'International Journal of Imaging Systems and Technology.', link: 'https://doi.org/10.1002/ima.22785', notes: 'SCI and Scopus Indexed, Impact Factor 3.3, Wiley Q2 journal' },
  { id: 8, type: 'journal', year: 2023, authors: 'Chinnu J., Gopakumar C., Fathima', title: 'Optimized radiomics-based machine learning approach for lung cancer subtype classification.', venue: 'Biomedical Engineering: Applications, Basis and Communications, 35(05), 2350023.', link: 'https://doi.org/10.4015/s1016237223500230', notes: 'Scopus and ESCI Indexed, World Scientific journal' },
  { id: 9, type: 'journal', year: 2023, authors: 'Anagha K. J., & Beevi S.', title: 'Advancing Road Scene Semantic Segmentation with UNet-EfficientNetb7.', venue: 'International Journal of Engineering and Manufacturing (IJEM), MECS Press.', link: 'https://doi.org/10.5815/ijem.2023.06.05', notes: '' },
  { id: 10, type: 'journal', year: 2022, authors: 'Sumod S., Sumathy S.', title: 'RetU-Net: An enhanced U-Net architecture for Retinal Lesion segmentation.', venue: 'International Journal on Artificial Intelligence Tools.', link: 'https://doi.org/10.1142/S0218213023500136', notes: 'SCI and Scopus Indexed, Impact Factor 1.1, World Scientific journal' },
  { id: 11, type: 'journal', year: 2022, authors: 'Sumod S., Sumathy S.', title: 'Transfer Learning approach in Deep Neural Networks for Uterine Fibroid detection.', venue: 'International Journal of Computational Science and Engineering.', link: 'https://doi.org/10.1504/IJCSE.2022.120788', notes: 'Scopus and ESCI Indexed, Inderscience journal' },
  { id: 12, type: 'journal', year: 2021, authors: 'Chinnu Jacob; Gopakumar Chandrasekhara Menon', title: 'Pathological categorization of lung carcinoma from multimodality images using convolutional neural networks.', venue: '', link: 'https://doi.org/10.1002/ima.22684', notes: 'SCI and Scopus Indexed, Impact Factor 3.3, Wiley Q2 journal' },
  
  // Conference Publications
  { id: 13, type: 'conference', year: 2024, authors: 'Sufail; Chinnu Jacob; Christy', title: 'An Integrated Deep Learning Approach for Crack Detection and Localization in Tyre Images.', venue: '2024 IEEE Recent Advances in Intelligent Computational Systems (RAICS)', link: 'https://doi.org/10.1109/RAICS61201.2024.10690007', notes: '' },
  { id: 14, type: 'conference', year: 2024, authors: 'Irfan; Chinnu Jacob; Resmi R.', title: 'Facial Recognition and CCTV Integration for Enhanced Security Using Deep Learning Techniques.', venue: '2024 IEEE RAICS', link: 'https://doi.org/10.1109/RAICS61201.2024.10689986', notes: '' },
  { id: 15, type: 'conference', year: 2024, authors: 'Anila; Chinnu Jacob; Resmi R.', title: 'An Efficient U-Net based Model for Low Grade Glioma Segmentation in MRI Images.', venue: '2024 Second International Conference on Emerging Trends in Information Technology and Engineering (ICETITE)', link: 'https://doi.org/10.1109/ictite58242.2024.10493347', notes: '' },
  { id: 16, type: 'conference', year: 2023, authors: 'Amala; Saritha Jayaraj; Sumod Sundar; T. P. Imthias Ahamed', title: 'Residential Demand Response using Q-Learning with Pursuit Algorithm for Action Selection.', venue: '2023 IEEE International Conference on Power Electronics, Smart Grid, and Renewable Energy (PESGRE)', link: 'https://doi.org/10.1109/PESGRE58662.2023.10404131', notes: '' },
  { id: 17, type: 'conference', year: 2023, authors: 'Steephen S.; Sheeba R.; Sumod S.', title: 'Demand forecasting in smart homes using deep learning techniques.', venue: '2023 International Conference on Control, Communication and Computing (ICCC)', link: 'https://doi.org/10.1109/ICCC57789.2023.10165034', notes: '' },
  { id: 18, type: 'conference', year: 2023, authors: 'Rufus; Anzar S. M.; Panthakkan A.; Mansoor W.', title: 'Transforming Healthcare: Raabin White Blood Cell Classification with Deep Vision Transformer.', venue: '2023 6th Int. Conf. on Signal Processing and Information Security (ICSPIS)', link: 'https://doi.org/10.1109/ICSPIS60075.2023.10344258', notes: '' },
  { id: 19, type: 'conference', year: 2022, authors: 'Archa Joshy; Sumod S.', title: 'Analyzing the Performance of Sentiment Analysis using BERT, DistilBERT, and RoBERTa.', venue: '2022 IEEE IPRECON', link: 'https://doi.org/10.1109/IPRECON55716.2022.10059542', notes: '' },
  { id: 20, type: 'conference', year: 2022, authors: 'Fathima N.; Sumod S.', title: 'Efficient DDoS Attack Detection using Machine Learning Techniques.', venue: '2022 IEEE IPRECON', link: 'https://doi.org/10.1109/IPRECON55716.2022.10059561', notes: '' },
  { id: 21, type: 'conference', year: 2022, authors: 'Jumana; Chinnu Jacob', title: 'Deep CNN Based Approach for Driver Drowsiness Detection.', venue: '2022 IEEE IPRECON', link: 'https://doi.org/10.1109/iprecon55716.2022.10059547', notes: '' },
  { id: 22, type: 'conference', year: 2022, authors: 'Rufus; Chinnu Jacob; Anzar S. M.; Panthakkan A.', title: 'Mask R-CNN with Multi-Backbones — A Comparative Analysis.', venue: '2022 ICSPIS', link: 'https://doi.org/10.1109/icspis57063.2022.10002546', notes: '' },
  { id: 23, type: 'conference', year: 2022, authors: 'Abhiram A. P.; Anzar S. M.; Panthakkan A.', title: 'DeepSkinNet: a deep learning model for skin cancer detection.', venue: '2022 ICSPIS', link: 'https://doi.org/10.1109/ICSPIS57063.2022.10002541', notes: '' },
  { id: 24, type: 'conference', year: 2022, authors: 'N. Ansalnakhan; Fousia Shamsudeen', title: 'Remaining Useful Life and State of Health Assessment for Lithium Ion Batteries Using CNN-BILSTM-DNN Hybrid Method.', venue: '2022 IEEE IPRECON', link: 'https://doi.org/10.1109/IPRECON55716.2022.10059708', notes: '' },
  { id: 25, type: 'conference', year: 2022, authors: 'Sreelekshmi; Adarsh S.', title: 'Root Cause Analysis in Power Transformer Failure with Improved Intelligent Methods.', venue: '2022 IEEE IPRECON', link: 'https://doi.org/10.1109/IPRECON55716.2022.10059538', notes: '' },
  { id: 26, type: 'conference', year: 2022, authors: 'Akshay K. R.; Sumod S.; Shanir P. P.', title: 'Emotion recognition from EEG signals using machine learning model.', venue: '2022 IMPACT Conference', link: 'https://doi.org/10.1109/IMPACT55510.2022.10029284', notes: '' },
  { id: 27, type: 'conference', year: 2021, authors: 'Subuhana N.; Aysha; Sumod', title: 'Deep learning techniques for breast cancer analysis: a review.', venue: '2021 Fourth International Conference on Microelectronics, Signals & Systems (ICMSS)', link: 'https://doi.org/10.1109/ICMSS53060.2021.9673651', notes: '' },
  { id: 28, type: 'conference', year: 2021, authors: 'Ganga Saji; Thanseem; Sumod S.', title: 'Deep Learning Methods for Lung Cancer Detection, Classification and Prediction — A Review.', venue: '2021 ICMSS', link: 'https://doi.org/10.1109/ICMSS53060.2021.9673598', notes: '' },
  { id: 29, type: 'conference', year: 2021, authors: 'Aswathy S.; Saranya T.; Sumod S.; Santhi N.', title: 'Deep Learning Techniques for Brain Tumor Diagnosis: A Review.', venue: '2021 ICMSS', link: 'https://doi.org/10.1109/ICMSS53060.2021.9673638', notes: '' },
  { id: 30, type: 'conference', year: 2020, authors: 'Chinnu Jacob; Gopakumar C.; Sivadath B.', title: 'Detection and Localization of Pulmonary Carcinoma Using Deep Learning Approach in Computed Tomography Images.', venue: 'International Conf. on Automation, Signal Processing, Instrumentation and Control', link: 'https://doi.org/10.1007/978-981-15-8221-9_174', notes: '' },
  { id: 31, type: 'conference', year: 2020, authors: 'Chinnu Jacob; Gopakumar C.', title: 'Pulmonary nodule detection techniques in CT images: new strategies and challenges.', venue: '2020 6th Int. Conf. on Advanced Computing and Communication Systems (ICACCS)', link: 'https://doi.org/10.1109/icaccs48705.2020.9074161', notes: '' },
  
  // Conference Publications — Accepted
  { id: 32, type: 'accepted', year: 0, authors: 'Mithun; Sumod; Christy D. Ponnan', title: 'College Library Face Detection and Management System with Anti-spoofing Mechanism.', venue: 'IEEE ACOIT 2024 — Presented & Awaiting Publication.', link: '#', notes: '' },

  // White Papers
  { id: 33, type: 'whitepaper', year: 0, authors: 'Ann B Merin (Batch 2022–24)', title: 'Accelerating Unit Testing using Generative AI.', venue: 'Tata Elxsi Insights', link: 'https://www.tataelxsi.com/insights/accelerating-unit-testing-using-generative-ai', notes: '' },
  { id: 34, type: 'whitepaper', year: 0, authors: '', title: 'Automotive System Requirement Generation using Retrieval Augmented Generation (RAG) and Generative AI.', venue: 'Tata Elxsi Insights', link: 'https://www.tataelxsi.com/insights/automotive-system-requirement-generation-using-retrieval-augmented-generation-rag-and-generative-ai', notes: '' },
];

const PublicationCard = ({ pub }: { pub: Publication }) => {
  const getBadges = (notes: string) => {
    const badges = [];
    if (notes.includes('SCI')) badges.push('SCI');
    if (notes.includes('Scopus')) badges.push('Scopus');
    if (notes.includes('Q1')) badges.push('Q1');
    if (notes.includes('Q2')) badges.push('Q2');
    return badges;
  }
  
  return (
    <Card className="flex flex-col md:flex-row">
       <div className="p-4 md:border-r md:w-24 flex md:flex-col items-center justify-center text-center">
         <p className="font-bold font-headline text-2xl text-primary">{pub.year > 0 ? pub.year : ''}</p>
       </div>
       <div className="p-4 flex-1">
          <h3 className="font-semibold italic mb-1">{pub.title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
          <p className="text-sm mb-3">{pub.venue}</p>
          {pub.notes && <p className="text-xs text-muted-foreground bg-muted p-2 rounded-md">{pub.notes}</p>}
           <div className="flex flex-wrap gap-2 mt-3">
             {getBadges(pub.notes || '').map(badge => <Badge key={badge} variant="secondary">{badge}</Badge>)}
             <a href={pub.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-primary hover:underline gap-1">
                Read Publication <ExternalLink className="h-4 w-4" />
             </a>
           </div>
       </div>
    </Card>
  )
};

const PublicationGroup = ({ title, publications }: { title: string; publications: Publication[] }) => {
  if (publications.length === 0) return null;
  
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold font-headline border-l-4 border-primary pl-4">{title}</h3>
      <div className="space-y-4">
        {publications.map((pub) => <PublicationCard key={pub.id} pub={pub} />)}
      </div>
    </div>
  );
};


export function PublicationsSection() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPublications = useMemo(() => {
    if (!searchTerm) return publicationsData;
    const lowercasedFilter = searchTerm.toLowerCase();
    return publicationsData.filter(
      (pub) =>
        pub.title.toLowerCase().includes(lowercasedFilter) ||
        pub.authors.toLowerCase().includes(lowercasedFilter) ||
        pub.venue.toLowerCase().includes(lowercasedFilter) ||
        (pub.year > 0 && pub.year.toString().includes(lowercasedFilter))
    );
  }, [searchTerm]);
  
  const publicationsByType = (type: Publication['type']) => {
      return filteredPublications
        .filter(p => p.type === type)
        .sort((a, b) => (b.year || 0) - (a.year || 0));
  }

  const journalPubs = publicationsByType('journal');
  const conferencePubs = publicationsByType('conference');
  const acceptedPubs = publicationsByType('accepted');
  const whitepaperPubs = publicationsByType('whitepaper');


  return (
    <section id="publications" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl text-secondary-foreground">
            Our Publications
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Contributing to the global body of knowledge in Artificial Intelligence.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              aria-label="Search publications"
              placeholder="Search by title, author, year, venue..."
              className="pl-10 h-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="space-y-12">
            <PublicationGroup title="Journal Publications" publications={journalPubs} />
            <PublicationGroup title="Conference Publications" publications={conferencePubs} />
            <PublicationGroup title="Conference — Accepted" publications={acceptedPubs} />
            <PublicationGroup title="White Papers" publications={whitepaperPubs} />
            
             {filteredPublications.length === 0 && (
                <div className="text-center py-16 text-muted-foreground">
                  <p>No publications found matching your search.</p>
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
