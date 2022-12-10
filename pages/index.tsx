import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>

    <div className='nav'>
      <img src="image/banner.png" alt="" />
      
      <label htmlFor="">

        <select name="" id="">

        <option value=""><a href="">About</a></option>
        <option value=""><a href="">Services</a></option>
        <option value=""><a href="">Clients</a></option>
        <option value=""><a href="">Contact</a></option>



        </select>
        




        
        
        
        
        </label>

      
    </div>

    

      
       <div className='text-top'>
      
      

    </div> 
    
    <div className='options'>
      <a href=""><img src="image/dash.png" alt="" /></a>

      <a href=""><img src="image/skip.jpg" alt="" /></a>

      <a href=""><img src="image/uber.png" alt="" /></a>
      
    </div>
        
    
  <div className='us'>
    <h1>ESTABLISHED : 2021</h1>
    <img src="image/2.png" alt="" />
    <p>
We are a creative digital media agency <br /> based in
Vancouver that loves helping the <br /> HOSPITALITY BUSINESS connect with their customers</p>
  </div>
  <div className='bg'>
      <img src="image/bg4.gif" alt="" />
    
    </div>
    <div className='love'>

      <h1>THINGS WE LOVE TO DO</h1>

      <p>Our services are tailored to your business needs and we can develop marketing strategies that enable your business to engage with customers.</p>


    </div>
    <div className='web'>
      <h1>Website</h1>
      <p>Customized Design for your Brand <br />
Mobile - Optimized Design <br />
Order Online System <br />
Email Marketing Campaign <br />
SEO <br />
Google Analytics Reports <br />
Hosting, Emails & Unlimited Updates <br />
Dedicated Account Manager 7 Days</p>

    </div>
    <div>
      <h1>Work of the Month</h1>
    </div>
    <div className='work'>

    <a href="https://sukhraj123.github.io/ilovecelsius/"><img src="image/1.png" alt="" /><p>ICelsius Bubble Tea <br /> Vancouver,Bc</p></a>
    <a href="https://sukhraj123.github.io/Supremepizza/"><img src="image/3.png" alt="" /><p>Supreme Pizza <br /> Vancouver,Bc</p></a>





    </div>
    </>
  )
}
