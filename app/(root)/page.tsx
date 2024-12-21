"use client"
import Image from "next/image";
import Form from "@/app/components/Form";
import Newsletter from "../components/Newsletter";
import Navbar from "../components/Navbar";


export default function Home() {
  return (
   <div>
  <Navbar />
      <main className="bg-[#F8F9FA] w-full">
     
      <div className="relative w-full mx-auto  overflow-hidden xl:flex bg-white/30 backdrop-blur-[50px] ">
       
       <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-left opacity-50">
    
           <div className="w-[500px] h-[103.33px] bg-[#ffa100] rounded-full blur-[50.33px] xxl:w-[700px] xxl:h-[100px] xxl:blur-[80.33px]"></div>
           <div className="w-[400px] h-[111.94px] bg-[#ff00ae] blur-[50.33px] xxl:w-[400px] xxl:h-[300px] xxl:blur-[80.33px]"></div>
           <div className="w-[250px] h-[103.33px] bg-[#08ff00] rounded-full blur-[50.33px] xxl:w-[200px] xxl:h-[100px] xxl:blur-[90.33px]"></div>
       </div>
      

       
       <div className="flex flex-col py-10 justify-start items-start p-4 h-full xl:flex-row ">
    <div className="flex-1">
        <h1 className=" xl:text-[60px]  xl:leading-[60px]   py-4">
            Innovative SaaS Solutions to Power Your Business
        </h1>
        <p className="text-black text-sm font-normal font-['Clash Display'] mt-2">
            <div className="md:text-[18px] leading-[25px]">
                We build cutting-edge SaaS products designed to simplify workflows, enhance productivity, and drive success for businesses of all sizes. From seamless integrations to user-friendly interfaces, our solutions are crafted with innovation and efficiency at their core.
            </div>
        </p>
        <div className="mt-4">
            <button className="w-[243.71px] h-[44.70px] bg-[#0149e9] rounded-lg text-white text-base font-medium font-['Clash Display'] flex items-center justify-center xxl:p-6">
                Check our Products
            </button>
        </div>
    </div>
    <div className="flex-1 mt-4 mx-auto xl:mt-0 xl:ml-4 xl:float-right">
        <img src="/Hero Image.svg" alt="Description of image" className="w-full mx-auto" />
    </div>
</div>
</div>
     
      
        <div  className="container lg:flex xxl:mx-auto">
          <div className="box">
            <img src="/academicons_open-data.svg" alt="" />
            <div className="Card-header xxl:text-[24px]  xxl:leading-[25px]">Data Analytics and Reporting</div>
            <p className=" text py-4 xxl:text-[19px] xxl:leading-[22px]">Unlock the power of your data with advanced analytics and reporting tools. Visualize trends, track KPIs, and make data-driven decisions with ease. Our platform turns complex data into actionable insights, enabling you to stay ahead in a competitive market and achieve your business goals</p>
          </div>
          <div className="box">
            <img src="/hugeicons_ai-innovation-01.svg" alt="" />
            <div className="Card-header xxl:text-[24px] xxl:leading-[25px]">Innovative Technology</div>
            <p className="py-4 xxl:text-[19px] xxl:leading-[22px]">Stay ahead in a rapidly evolving digital world with our cutting-edge technology solutions. We harness the latest advancements to create software that’s efficient, reliable, and scalable. From AI-driven insights to seamless integrations, our tools are designed to empower businesses.</p>
          </div>
          <div className="box">
            <img src="/carbon_ibm-cloud-pak-business-automation (1).svg" alt="" />
            <div className="Card-header xxl:text-[24px] xxl:leading-[25px]">Business Automation</div>
            <p className="xxl:text-[19px]  xxl:leading-[22px]">Transform your workflows with tools designed to automate repetitive tasks and simplify operations. Our solutions enable you to streamline processes, reduce manual errors, and save time, allowing your team to focus on strategic growth initiatives.</p>
          </div>
          <div className="box">
            <img src="/Frame 516.svg" alt="" />
            <div className="Card-header xxl:text-[24px] xxl:leading-[25px]"> Supply Chain and Logistics</div>
            <p className=" xxl:text-[19px] xxl:leading-[22px]">Optimize every aspect of your supply chain with tools that enhance visibility, streamline inventory management, and improve delivery planning. Our solutions help businesses save time and reduce costs while ensuring customer satisfaction.</p>
          </div>
         
        </div>
       {/*  <section className="about-products xl:flex-col-2">
         
            <h2 className="">Our Products</h2>
           
            <div className="md:text-[15px] xl:flex  ">

            <div className="sub-heading px-3">TVERZA</div>
             <div className="sub-about-text px-3">Lorem ipsum dolor sit amet consectetur. Viverra a tristique aliquet cum amet. Et pulvinar mollis dictumst sollicitudin. Mi gravida dolor consectetur sapien ullamcorper. Justo ullamcorper lobortis sit pellentesque pellentesque velit tortor.
             Volutpat facilisis tristique eu nec. Posuere leo at odio eros at morbi. Risus urna varius libero enim. Sed ut enim ut praesent nunc diam. Pretium interdum proin ut nec urna at. Risus magna sed id mi suspendisse. Sed rutrum euismod dignissim blandit sit elementum a arcu. Turpis nulla molestie cursus accumsan purus gravida suspendisse nisl. Mauris at laoreet ut blandit ornare odio sed. Tellus faucibus ac adipiscing sed in ut viverra diam mauris. Aliquet ut quam egestas morbi est scelerisque euismod. Sit egestas egestas magna volutpat et velit a viverra mattis.</div> 
          
          <div>
          <img src="/Dashboard.svg" alt="" className="rounded-[16px] flex mx-auto mt-5 xl: rounded-[20px] xl:ml-6" />
          </div>
          </div>
          
          
        </section> */}
        <section className="about-products xl:flex-col-2" id="products">
          <div>
            <h2 className="text-center text-black text-4xl font-bold font-clash-display font-bold xxl:text-[56px]">Our Products</h2>
            <div className="md:text-[15px]  xl:flex xl:py-4">
            <div className="xl:flex-col-1">
            <div className="sub-heading px-3 font-clash-display font-bold">TVERZA</div>
            <div className="sub-about-text px-3 xl:mt-6 leading:[50px] xxl:text-[20px] ">
            <span className="font-medium ">"Tverza</span> is the flagship product of <span className="font-bold">RES00LVE TECH LIMITED</span>, designed to revolutionize global business operations by creating a unified ecosystem that connects key players across the entire supply chain. From manufacturers and suppliers to logistics providers and end-users, Tverza simplifies collaboration, enabling seamless transactions and fostering growth for businesses of all sizes.  

The platform provides a comprehensive suite of tools to manage product sourcing, logistics coordination, and secure payment processing, while also offering advanced features like real-time transaction tracking, digital signatures, and fraud prevention. Users can oversee every stage of their business operations, from ongoing deals to completed transactions, ensuring transparency and efficiency throughout the process.  

<span className="font-medium">Tverza</span> is adaptable to industries such as logistics, real estate, finance, tech, and more, offering tailored solutions to optimize workflows and connect stakeholders effectively. By uniting these critical players within a single ecosystem, Tverza empowers businesses to streamline their operations, reduce costs, and scale confidently.  

At <span className="font-bold">RES00LVE TECH LIMITED</span>, <span className="font-medium">Tverza</span> represents our commitment to innovation and sustainability, ensuring that businesses not only survive but thrive in an increasingly interconnected and competitive world."
            .</div> 
             </div>
             <img src="/Dashboard.svg" alt="" className="rounded-[16px] flex mx-auto mt-5 xl: rounded-[20px] " />
            </div>
          </div>
        </section>
        <section className="Product-container">
          <div className="product">
          <h2 className="">Coming soon</h2>
          </div>
        </section>
        <section className="client  ">
          <div className="card-container">
          <div className="text-black text-[38.08px] font-semibold font-['Clash Display'] text-center py-8">What our clients say</div>
          <div className="sm:grid grid-cols-2 gap-1 lg:grid-cols-4 gap-2">
          <div className="client-card  mt-14 ">
          
            <div className=" flex mx-auto ">
            <img src="/Ellipse 514 (1).svg" alt="" className="mx-auto -mt-8 relative"/>
            </div>
            <div className="text-center text-black text-[18px] font-semibold font-['Clash Display'] py-6 font-bold">BOA</div>
           <p className="px-1 mt-2">Just completed an onboarding session with the team. You guys have a great and unique project going on. 
This is a platform that favors everyone ranging from big firms(manufacturers) down to the end users make transactions between the two parties easy and seamless🔥

<div className="mt-3">great job guys</div>
</p> 
           <div className="flex-stars">
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
           </div>
          </div>
          <div className="client-card h-fit  mt-14 ">
          
            <div className=" flex mx-auto">
            <img src="/Ellipse 514 (4).svg" alt="" className="mx-auto -mt-8 relative"/>
            </div>
            <div className="text-center text-black text-[18px] font-semibold font-['Clash Display'] py-6 font-bold">Mac Anthony</div>
           <p className="px-1 mt-2">i was onboarded yesterday by tverza's team. i must say am impressed with the whole idea. the brillance, uniqueness and hardwork put in place.

<div className='mt-3'>Well done team tverza 🔥 🔥</div>
</p> 
           <div className="flex-stars mt-14">
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
           </div>
          </div>
  
          <div className="client-card h-fit mt-14 ">
          
            <div className=" flex mx-auto">
            <img src="/Ellipse 514 (6).svg" alt="" className="mx-auto -mt-8 relative"/>
            </div>
            <div className="text-center text-black text-[18px] font-semibold font-['Clash Display'] py-6 font-bold">Poete</div>
           <p className="px-1 mt-2">TVERZA product is a unique product that all sectors of business need in this tech era. 
I'm happy to be a part of it
Thanks for this opportunity 🙏🙏
</p> 
           <div className="flex-stars mt-12">
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
           </div>
          </div>
          <div className="client-card h-fit mt-14 ">
          
            <div className=" flex mx-auto">
            <img src="/Ellipse 514 (2).svg" alt="" className="mx-auto -mt-8 relative"/>
            </div>
            <div className="text-center text-black text-[18px] font-semibold font-['Clash Display'] py-6 font-bold">Peace</div>
           <p className="px-1 mt-2">Tverza is a platform that you would want to join, with what I have seen so far with the team, they did a wonderful job.

<div className="mt-3">Don't be told about it , come and  experience it.</div>

<div className="mt-3">I'm glad to be part of it.</div></p>
           
           <div className="flex-stars h-fit mt-4">
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
           </div>
          </div>
          <div className="client-card h-fit mt-14 ">
          
            <div className=" flex mx-auto">
            <img src="/Ellipse 514 (5).svg" alt="" className="mx-auto -mt-8 relative"/>
            </div>
            <div className="text-center text-black text-[18px] font-semibold font-['Clash Display'] py-6 font-bold">Imeogu JohnPaul
</div>
           <p className="px-1 mt-2">It has been a wonderful experience so far with Tverza, with the overview of the purpose and functionality. While I commend the efforts of the Team, I believe there’s more to be done and we won’t relent until we achieve the vision to which Tverza was founded. 

<div className="mt-4">Tverza is the future of Logistics.</div>

<div className="mt-4">Kudos to Team!</div></p> 
           <div className="flex-stars ">
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
           </div>
          </div>
          <div className="client-card  h-fit mt-14">
          
            <div className=" flex mx-auto">
            <img src="/Ellipse 514 (8).svg" alt="" className="mx-auto -mt-8 relative"/>
            </div>
            <div className="text-center text-black text-[18px] font-semibold font-['Clash Display'] py-6 font-bold"> Anthony Ejike 
            </div>
           <p className="px-1 mt-2">Nothing beats a world-class thinking, innovation and implementation....the team overdid this and took it to a whole new level 💯

Like Amazon and AliExpress never knew that they needed help with their business until tverza came...😂🫴
Talking about other niche sef...real estate, banking and finance, Electronics,tech... like they legit embedded everything in one place....
This is simply thinking 30years(pardon ...I mean a lifetime) ahead cos this can never go wrong with AI and Innovation...
There's a whole lot uncovered here on tverza and I'm never missing out on the journey...Very very tempting...
Kudos to the team with 🔥🔥🔥🔥
</p> 
           <div className="flex-stars">
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
           </div>
          </div>
  
          <div className="client-card  h-fit mt-14">
          
            <div className=" flex mx-auto">
            <img src="/Ellipse 514 (7).svg" alt="" className="mx-auto -mt-8 relative"/>
            </div>
            <div className="text-center text-black text-[18px] font-semibold font-['Clash Display'] py-6 font-bold"> DY Properties 


            </div>
           <p className="px-1 mt-2">I'm quite impressed with tverza, bro!

The features are top notch and you and your team are thinking outside the box!

I'm so glad that I had the opportunity to be part of the first users of tverza.


You've made life easier for me and my fellow business men/women out there. You've done well, bro 💯

</p> 
           <div className="flex-stars">
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
           </div>
          </div>
  
          <div className="client-card  h-fit mt-14">
          
            <div className=" flex mx-auto">
            <img src="/Ellipse 514 (10).svg" alt="" className="mx-auto -mt-8 relative"/>
            </div>
            <div className="text-center text-black text-[18px] font-semibold font-['Clash Display'] py-6 font-bold"> IBENEM
            </div>
           <p className="px-1 mt-2">The platform is impressive, with so many unique features that make it a joy to explore. Thanks for the onboarding opportunity, but honestly, tverza is even more amazing than what has been described so far.

I'm still testing and reviewing some features, but everything looks really good! 💯

</p> 
           <div className="flex-stars">
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
            <img src="/ic_round-star.svg" alt="" />
           </div>
          </div>
  

          </div>
          </div>
        </section>
        <div className=" article mt-11" id="About">
          <h3 className="h3 py-2" >About Us</h3>
          <div className="xl:flex ">
          <p className="px-3  flex-col justify-start font-medium xl:mt-5 ">
         At <span className="font-bold  ">RES00LVE TECH LIMITED</span>, we are a forward-thinking SaaS company dedicated to building innovative software solutions that solve real-world problems. Our mission is to empower businesses and individuals by delivering cutting-edge products that simplify processes, enhance productivity, and drive growth.  

With a focus on usability, scalability, and security, our products are designed to address the unique challenges faced by diverse industries, from logistics and finance to retail and beyond. We pride ourselves on leveraging technology to create seamless experiences that bridge gaps and unlock new opportunities.  
</p>
          <div className="bg">
          <div className="product-place  h-[317.35px] bg-[#d9d9d9] xl:-mt-7 xl:w-[700px]"><p className="hidden">fggff</p></div>
          </div>
        </div>
        </div>
        <section className="team mt-10">
          <h3 className="h3 sm:px-2">Meet our beautiful Team</h3>
          <div className="text-[#797979] text-[19.04px] font-medium font-['Clash Display'] text-center ">Meet our team of professionals to serve you </div>
          <div className="teams lg:grid grid-rows-1">
          <div className="teams-profile-card">
              <img src="/Rectangle 3.svg" alt="" />
              <div className="text-[#c5bdbd] text-[11.11px] font-medium font-['Clash Display'] text-center py-2 mt-3">Backend Developer</div>
              <div className="text-[#454545] text-[19.04px] font-medium font-['Clash Display'] text-center">Alfred Divine</div>
              <div className="flex justify-center gap-1 py-3">
              <div className="text-xs w-[16.97px] h-[16.97px]  bg-[#d9d9d9] justify-center flex rounded font-medium">C</div>
              <div className="text-xs w-[16.97px] h-[16.97px]  bg-[#d9d9d9] justify-center flex rounded font-medium"> E</div>
              <div className="text-xs w-[16.97px] h-[16.97px]  bg-[#d9d9d9] justify-center flex rounded font-nedium">O</div>
              </div>
            </div>
          <div className="teams-profile-card">
              <img src="/Rectangle 2.svg" alt="" />
              <div className="text-[#c5bdbd] text-[11.11px] font-medium font-['Clash Display'] text-center py-2 mt-3">Full-stack</div>
              <div className="text-[#454545] text-[19.04px] font-medium font-['Clash Display'] text-center">Alfred Divine</div>
              <div className="flex justify-center gap-1 py-3">
              <div className="text-xs w-[16.97px] h-[16.97px]  bg-[#d9d9d9] justify-center flex rounded font-medium">C</div>
              <div className="text-xs w-[16.97px] h-[16.97px]  bg-[#d9d9d9] justify-center flex rounded font-medium">     T</div>
              <div className="text-xs w-[16.97px] h-[16.97px]  bg-[#d9d9d9] justify-center flex rounded font-nedium">O</div>
              </div>
            </div>
          <div className="teams-profile-card">
              <img src="/Rectangle 3 (1).svg" alt="" />
              <div className="text-[#c5bdbd] text-[11.11px] font-medium font-['Clash Display'] text-center py-2 mt-3">Backend Developer</div>
              <div className="text-[#454545] text-[19.04px] font-medium font-['Clash Display'] text-center">Onyeka Promise </div>
              <div className="flex justify-center gap-1 py-3">
              <div className="text-xs w-[16.97px] h-[16.97px]  bg-[#d9d9d9] justify-center flex rounded font-medium">C</div>
              <div className="text-xs w-[16.97px] h-[16.97px]  bg-[#d9d9d9] justify-center flex rounded font-medium"> 0</div>
              <div className="text-xs w-[16.97px] h-[16.97px]  bg-[#d9d9d9] justify-center flex rounded font-nedium">O</div>
              </div>
            </div>
          <div className="teams-profile-card">
              <img src="/Rectangle 2 (1).svg" alt="" />
              <div className="text-[#c5bdbd] text-[11.11px] font-medium font-['Clash Display'] text-center py-2 mt-3">  Full-stack Developer</div>
              <div className="text-[#454545] text-[19.04px] font-medium font-['Clash Display'] text-center">Alfred Divine</div>
              <div className="flex justify-center gap-1 py-3">
              <div className="text-xs w-[16.97px] h-[16.97px]  bg-[#d9d9d9] justify-center flex rounded font-medium">C</div>
              <div className="text-xs w-[16.97px] h-[16.97px]  bg-[#d9d9d9] justify-center flex rounded font-medium"> I</div>
              <div className="text-xs w-[16.97px] h-[16.97px]  bg-[#d9d9d9] justify-center flex rounded font-nedium">O</div>
              </div>
            </div>
          </div>
        </section>
        <section className="Form">
          <Form />
        </section>
        
      </main>

      <footer>
      <Newsletter />
      
      <div className="links">

        <div className=" flex justify-center gap-10 items-center text-center py-6 xxl:text-[20px]">
          <a href="#home">
        <div className="text-center text-white text-sm font-normal font-clash-display">Home</div>
        </a>
        <a href="#products">
        <div className=" text-center text-white text-sm font-normal font-clash-display">Products</div>
        </a>
        <a href="#About">
        <div className=" text-center text-white text-sm font-normal font-clash-display">AbouUs</div>
        </a>
        <a href="contacts">
        <div className="text-center text-white text-sm font-normal ">Contact</div>
        </a>
        </div>
      </div>
      <div className="py-3 pb-3 justify-center items-center text-center font-clash-display">
        <img src="/Social.svg" alt="" />
      </div>
      <div className="opacity-75 text-center text-white text-xs font-normal font-clash-display">© Copyright 2023 - RES00LVE TECH LIMITED</div>
      </footer>
    </div>
  );
}
