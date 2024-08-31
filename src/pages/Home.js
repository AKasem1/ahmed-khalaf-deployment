import React, {useState} from 'react';
import { Element } from 'react-scroll';
import photo from '../assets/Khalaf-photo.png';
import MinusAnimation from '../Components/MinusAnimation';
import DivideAnimation from '../Components/DivideAnimation';
import MultiplyAnimation from '../Components/MultiplyAnimation';
import UnequalAnimation from '../Components/UnequalAnimation';
import WhyUs from '../Components/WhyUs';
import NotesAnimation from '../Components/NotesAnimation';
import Arrow from '../Components/Arrow';
import Cards from '../Components/Cards';
import { PiNumberCircleFourFill, PiNumberCircleFiveFill, PiNumberCircleSixFill } from "react-icons/pi";
import PricingPackage from '../Components/Pricing Package';
import GradeCard from '../Components/GradeCard';
import WaveAnimation from '../Components/WaveAnimation';

const Home = () => {
    const [selectedGrade, setSelectedGrade] = useState('');
    const cards = [
        {
          title: 'الإحصاء',
          subtitle: 'حكومي - لغات',
          description: '04',
          Component: "https://i.ibb.co/9H3Z8Cx/stats.jpg",
          color: '#25a9cb'
        },
        {
            title: 'الصف الثاني الإعدادي',
            subtitle: 'حكومي - لغات',
            description: '04',
            Component: "https://i.ibb.co/zPQSCJq/2prep.jpg",
            color: '#25a9cb'
          },
        {
          title: 'الصف الثالث الإعدادي',
          subtitle: 'حكومي - لغات',
          description: '05',
          Component: "https://i.ibb.co/Dfsyx1W/3prep.jpg",
          color: '#E97451'
        },
        {
          title: 'الصف الأول الثانوي',
          subtitle: 'حكومي - لغات',
          description: '06',
          Component: "https://i.ibb.co/G21Fj8x/1sec.jpg",
          color: '#003153'
        },
        {
            title: 'الصف الثاني الثانوي',
            subtitle: 'حكومي - لغات',
            description: '06',
            Component: "https://i.ibb.co/M2q90NP/2sec.jpg",
            color: '#003153'
          },
      ];

    
    const pricingDetails = [
        "شامل جميع فروع الرياضيات",
        "درسين في الأسبوع",
        "اختبار بعد كل درس",
        "اختبار شهري",
        "تقييم للطالب",
        "متابعة دورية مع ولي الأمر"
      ];

      const handleCardClick = (grade) => {
        setSelectedGrade(grade);
    };
    
    return (
        <div className="landing-page">
            <Element name="home" className="home-section">
                <div className="home-content">
                    <MinusAnimation />
                    <DivideAnimation />
                    <MultiplyAnimation />
                    <UnequalAnimation />
                    <div className="photo-container">
                        <img src={photo} alt="أ/ أحمد خلاف" className="home-photo" />
                    </div>
                    <div className="home-details">
                        <h1 className='firstName'>أ/ أحمد <span className='secondName'>خلاف</span></h1>
                        
                        <p>خبرة 23 سنة في مادة الرياضيات</p>
                    </div>
                </div>
            </Element>
            <div className="separator">
                <WaveAnimation />
            </div>
            <Element name="grades" className="section">
                <h2>المراحل التعليمية</h2>
                <div className="card-container">
            {cards.map((card, index) => (
                <GradeCard
                key={index}
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                Component={card.Component}
                color={card.color}
                onClick={() => handleCardClick(card.title)}
                />
            ))}
            </div>
            </Element>
            <div className="separator">
                <WaveAnimation />
            </div>
            <Element name="aboutus" className="about-section">
                {/* <WhyUs /> */}
                <Cards />
                {/* <Arrow /> */}
                {/* <NotesAnimation /> */}
            </Element>
            <div className="separator">
                <WaveAnimation />
            </div>
            <Element className="pricing-section" name='courses'>
            {selectedGrade && (<PricingPackage grade={selectedGrade} price="180 ج.م / شهر" details={pricingDetails} />)}
            </Element>
            
        </div>
    );
};

export default Home;
