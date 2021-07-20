import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import '../OC/OC.css'
import pranav from '../../tinified-oc/IMG_20200722_111901 - Pranav Shekhar.jpg'
import arnab from '../../tinified-oc/IMG_20200524_154858_627 - 019_ARNAB CHATTERJEE.jpg'
import shreesha from '../../tinified-oc/2021-03-17-20-55-40-344 - 212 SREESHA GUPTA.jpg'
import abhinavs from '../../tinified-oc/Abhinav Srivastava.jpg'
import sritishna from '../../tinified-oc/Pic1 - SRITISHNA SARANGI-min.jpg'
import subhayan from '../../tinified-oc/Favourite pic - 214 SUBHAYAN DAS.jpg'
import akash from '../../tinified-oc/Akash Chouhan - Akash Chouhan.jfif'
import nimisha from '../../tinified-oc/me copy - Nimisha Das.jpg'
import animesh from '../../tinified-oc/IMG_20191020_174245 - 152_Animesh Pathak-min.jpg'
import abhinav from '../../tinified-oc/WhatsApp Image 2021-01-07 at 2.16.53 PM - 193_ABHINAV MUKHERJEE.jpeg'
import saniya from '../../tinified-oc/Snapchat-913224619 - 402_SANIYA BHARGAV(1).jpg'
import swastika from '../../tinified-oc/64952590-2243-460C-B040-91C4AFD70C88 - 837_SWASTIKA BISHNOI.jpeg'
import rohit from '../../tinified-oc/Rohit_Jaiswal_Operations - 235_ROHIT JAISWAL.jpeg'
import utkarsh from '../../tinified-oc/WhatsApp Image 2021-07-01 at 10.01.14 PM.jpeg'
import gaurav from '../../tinified-oc/Gaurav MSAC - 530_GAURAV KUMAR VERMA.png'
import srijita from '../../tinified-oc/IMG_20200620_095454_237 - 571_Srijita Mallick.jpg'
import shreya1 from '../../tinified-oc/WhatsApp Image 2021-02-05 at 8.30.28 PM (3) - 5272_SHREYA AGARWAL.jpeg'
import rahul from '../../tinified-oc/rahul.jpeg'
import sagnik from '../../tinified-oc/sagnik - 420_SAGNIK GHOSH.png'
import arushi from '../../tinified-oc/2020-10-24-075044764 - 293_AARUSHI SHANKER.jpg'
import satwick from '../../tinified-oc/IMG_20210329_173106~2 - 198_SAATWIK.jpg'
import himanshu from '../../tinified-oc/IMG_1176-1 (2) - 900_HIMANSHU VERMA.jpg'
import anvit from '../../tinified-oc/IMG_20201019_210215 - 5220_ANVIT DUBEY.jpg'
import arnab1 from '../../tinified-oc/d42631aa-c987-4c18-81bd-d29faf4abc9c - 017_ARNAB DAN.jpg'
import mayank from '../../tinified-oc/Mayank Jain - 6553 - MAYANK JAIN.jpeg'
import ayshi from '../../tinified-oc/WhatsApp Image 2021-05-28 at 11.49.12 PM - 018_AYSHI BHOWMIK.jpeg'
import aniket from '../../tinified-oc/PicsArt_05-11-04.23.56 - 075_ ANIKET BHUNIA.jpg'
import shreya2 from '../../tinified-oc/Shreya-Technical - 717_SHREYA.jpeg'
import medhavi from '../../tinified-oc/MedhaviBasera_webdev - 781_Medhavi Basera.jpg'
import krishanu from '../../tinified-oc/20200811_205508 - 036_KRISHANU.jpg'
import akshita from '../../tinified-oc/AkshitaSah - 5286_Akshita Sah.jpeg'
import sagar from '../../tinified-oc/IMG-20210414-WA0022-01 - 5261_SAGAR SATAPATHY.jpeg'
import priyanka from '../../tinified-oc/Priyanka Dutta - 335_PRIYANKA DUTTA.jpeg'
import amrutanshu from '../../tinified-oc/IMG20210316211728 - 735_AMRUTANSHU DASH.jpg'
import urja from '../../tinified-oc/IMG_20210202_192511~2 - URJA JAIN.jpg'
import atig from '../../tinified-oc/WhatsApp Image 2021-07-01 at 8.24.11 PM.jpeg'
import santanu from '../../tinified-oc/DPfb - 465_Santanu Biswas.jpg'
import aditya from '../../tinified-oc/7863B231-AD0C-44C5-BAA5-25E9D2CB25B1 - Aditya Sinha.jpeg'
import harsh from '../../tinified-oc/Screenshot 2021-07-03 192803.jpg'
import nishant from '../../tinified-oc/Nishant - Nishant Giri.jpg'
import divyam from '../../tinified-oc/Divyam.jpg'
import siddhant from '../../tinified-oc/Siddhant.jpg'  
import palak from '../../tinified-oc/WhatsApp Image 2021-07-12 at 6.20.10 PM.jpeg'
import avi from '../../tinified-oc/avi.jpg'
import rupa from '../../tinified-oc/RUPABARNA.png'

export default function OC() {
    return (
        <div className="oc" id="organizers">
        
        <Container className="py-5">
        <br></br>
        <h1 data-aos="fade-up" data-aos-duration="1000" className="octitle">Organizers</h1>
        
            <Row className="my-5">
                <Col><img id="oclogo" className="oc-img" src={pranav}/><h3>Pranav Shekhar</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={abhinavs}/><h3>Abhinav Srivastava</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={shreesha}/><h3>Sreesha Gupta</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={sritishna}/><h3>Sritishna Sarangi</h3></Col>
            </Row>
            <Row className="my-5">
                <Col><img id="oclogo" className="oc-img" src={arnab}/><h3>Arnab Chatterjee</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={subhayan}/><h3>Subhayan Das</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={akash}/><h3>Akash Chouhan</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={nimisha}/><h3>Nimisha Das</h3></Col>
            </Row>
            <Row className="my-5">
                <Col><img id="oclogo" className="oc-img" src={animesh}/><h3>Animesh Pathak</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={abhinav}/><h3>Abhinav Mukherjee </h3></Col>
                <Col><img id="oclogo" className="oc-img" src={saniya}/><h3>Saniya Bhargav</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={swastika}/><h3>Swastika Bishnoi</h3></Col>
            </Row>
            <Row className="my-5">
                <Col><img id="oclogo" className="oc-img" src={rohit}/><h3>Rohit Jaiswal</h3></Col>
                {/* <Col><img id="oclogo" className="oc-img"/><h3>Srijani</h3></Col> */}
                <Col><img id="oclogo" className="oc-img" src={gaurav}/><h3>Gaurav Kumar Verma</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={srijita}/><h3>Srijita</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={shreya1}/><h3>Shreya Agarwal</h3></Col>
            </Row>
            <Row className="my-5">
                <Col><img id="oclogo" className="oc-img" src={rahul}/><h3>Rahul Mishra</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={sagnik}/><h3>Sagnik Ghosh</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={arushi}/><h3>Aarushi Shanker</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={satwick}/><h3>Saatwik</h3></Col>
            </Row>
            <Row className="my-5">
                
                <Col><img id="oclogo" className="oc-img" src={himanshu}/><h3>Himanshu Verma</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={anvit}/><h3>Anvit Dubey</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={arnab1}/><h3>Arnab Dan</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={ayshi}/><h3>Ayshi Bhowmik</h3></Col>
            </Row>
            <Row className="my-5">
                
                <Col><img id="oclogo" className="oc-img" src={aniket}/><h3>Aniket Bhunia</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={shreya2}/><h3>Shreya</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={medhavi}/><h3>Medhavi Basera</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={krishanu}/><h3>Krishanu Tiwary </h3></Col>
            </Row>
            <Row className="my-5">
                
                <Col><img id="oclogo" className="oc-img" src={akshita}/><h3>Akshita Sah</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={sagar}/><h3>Sagar Satapathy</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={priyanka}/><h3>Priyanka Dutta</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={amrutanshu}/><h3>Amrutanshu Dash</h3></Col>
            </Row>
            <Row className="my-5">
                
                <Col><img id="oclogo" className="oc-img" src={urja}/><h3>Urja Jain</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={mayank}/><h3>Mayank Jain</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={atig}/><h3>Atig Purohit</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={santanu}/><h3>Santanu Biswas</h3></Col>
            </Row>
            <Row className="my-5">
                
                <Col><img id="oclogo" className="oc-img" src={nishant}/><h3>Nishant Giri</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={aditya}/><h3>Aditya Sinha</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={utkarsh}/><h3>Utkarsh Keerti</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={harsh}/><h3>Harsh</h3></Col>
            </Row>
            <Row className="my-5">
                
                <Col><img id="oclogo" className="oc-img" src={siddhant}/><h3>Siddhant Sahay</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={divyam}/><h3>Divyam Pradhan</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={palak}/><h3>Palak Sharma</h3></Col>
                <Col><img id="oclogo" className="oc-img" src={avi}/><h3>Avinav Roy</h3></Col>
            </Row>
            <Row className="my-5">
                
                <Col><img id="oclogo" className="oc-img" src={rupa}/><h3>Rupabarna Dastidar</h3></Col>
            </Row>
            </Container>  
        </div>
    )
}
