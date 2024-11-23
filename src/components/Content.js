import React from 'react'
import './content.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




export default function Content() {
  return (
    <div className='body-page'>

    <div className='cont-1'>
    <div className='container'>
      <div className="text-box">
        <h1>Welcome to <span className='spec-text'>AGRI</span></h1>
        <h2>Fresh Vegetables Delivered to Your Doorstep</h2>
        <p className='text-p'>Experience the freshest vegetables directly from local farmers. 
            At AGRI, we connect you to the heart of agriculture 
            by offering sustainable, high-quality produce delivered straight from 
            the fields to your home. Skip the middlemen, support your community, 
            and enjoy the taste of nature with every bite.</p>
        <Button variant="outline-success" className='btn-1'>See More</Button>{' '}
      </div>
    </div>
    <div className="content-pic">
        <div>
            <img className='front-img' src='/images/Farmer.png' alt='farmer'></img>
        </div>
    </div>
    </div>


    <div className='dis-sec'>
      <div className='dis-box'>
      <div className='dis-1'>
         <p className='dis-txt'>Super Discount For Your First Purchase</p>  
      </div> 
      <div className='dis-2'>
        <button className='dis-btn'>Free Offer</button>
      </div>
      <div className='dis-3'>
        <p className='dis-txt'>Use discount code in check out !</p>
      </div>
      </div>
    </div>

    <div className='container-2'>
      <div className='container-2-sub'>
      <div className='icon-1'>
        <img className='icon' src='/images/axe.png' alt='axe'></img>
      </div>
      <div>
        <h1 className='autoShow hd'>About Us</h1>
        <p className='autoShow Det com'>"Our platform connects farmers directly with customers, 
          cutting out the middlemen to ensure you receive the freshest 
          vegetables at the best prices. We believe in supporting local 
          farmers and promoting sustainable agriculture, ensuring that our 
          customers enjoy high-quality produce straight from the farm to their doorsteps."</p>
      </div>
      <div>
        <h1 className='autoShow hd'>How It Works</h1>
        <p className='autoShow Det-2 com'>"With our simple and easy-to-use platform, buying fresh vegetables has 
          never been easier. Customers can browse available products, 
          place their orders, and have them delivered within hours. 
          Farmers benefit by setting their prices and selling their produce 
          directly to you, ensuring fair trade and transparency throughout the process."</p>
      </div>
      <div>
        <h1 className='autoShow hd'>Why Choose Us</h1>
        <p className='autoShow Det-3 com'>"At AGRI, we prioritize freshness, sustainability, and supporting the local economy. 
          By sourcing directly from farmers, we reduce transportation emissions and food waste 
          while delivering top-notch, healthy produce. Your purchase helps support small farmers, 
          and in return, you get the freshest vegetables, guaranteed."</p>
      </div>
      </div>
    </div>

    <div className='categories'>
      <div className='cat-text'>
        <h1>Our Categories</h1>
        <p>Do not miss the current offers until the end of March.</p>
      </div>
      <div className='cat-pic-box'>
        <div>
           <img src='/images/bread.png'></img>
           <p>Breads and Bakery</p>
        </div>
        <div>
           <img src='/images/beef.png'></img>
           <p>Meats and Seafood</p>
        </div>
        <div>
           <img src='/images/milk.png'></img>
           <p>Brakfast and Dairy</p>
        </div>
        <div>
           <img src='/images/fruandveg.png'></img>
           <p>Fruits and Vegetables</p>
        </div>
        <div>
           <img src='/images/grocery.png'></img>
           <p>Grocery</p>
        </div>
      </div>
    </div>

    <div className='container-4'>
      <div className='package'>
      <div className='pic-box'>
        <img className='vegebag' src='/images/vegetablebag.png'></img>
      </div>
      <div className='pic-box-2'>
        <div className='t-box'>
          <span className='second-text'>Why Choose Us</span>
          <p className='text-p'>Healthy food is the key to your good mood!</p>
        </div>

        <div className='i-box'>

          <div className='i-1'>
            <img className='i-2' src='/images/vegicon.png'></img>
            <p className='txtnew'><span className='first-txt'>100% Fresh Food</span><br></br>
            Enjoy 100% fresh, farm-to-table ingredients</p>
          </div>
          <div className='i-1'>
            <img className='i-2' src='/images/checklist.png'></img>
            <p className='txtnew'><span className='first-txt'>Premium Quality Food</span><br></br>
            Experience the premium quality in every bite</p>
          </div>
          <div className='i-1'>
            <img className='i-2' src='/images/reward.png'></img>
            <p className='txtnew'><span className='first-txt'>Organic Farming</span><br></br>
            Support sustainable, organic farming practices</p>
          </div>

        </div>
      </div>
      </div>
    </div>

    
    <div className='container-5'>
    <section className="sec-container">
        <div className="box-container">
            <div className="box-1 box">
                <img src='/images/vegees.png' alt='veg'></img>
                <div className="text">
                    <h1>Vegetables</h1>
                    <p>Fresh from the farm to your table</p>
                </div>
            </div>
            <div className="box-2 box">
            <img src='/images/fruits.png' alt='fruits'></img>
                <div className="text">
                    <h1>Fruits</h1>
                    <p>Nature's treats for a healthy lifestyle</p>
                </div> 
            </div>
            <div className="box-3 box">
            <img src='/images/drinks.png' alt='drinks'></img>
                <div className="text">
                    <h1>Drinks</h1>
                    <p>Beverages made from finest ingredients</p>
                </div>
            </div>
            <div className="box-4 box">
            <img src='/images/meat.png' alt='meat'></img>
                <div className="text">
                    <h1>Meats</h1>
                    <p>Sourced from trusted farms for quality,flavor</p>
                </div>
            </div>
            <div className="box-5 box">
            <img src='/images/eggs.png' alt='eggs'></img>
                <div className="text">
                    <h1>Eggs</h1>
                    <p>Farm-fresh eggs for wholesome meals</p>
                </div>
            </div>
        </div>
        <div className="color-box"></div>
    </section>
    </div>

    <div className='c-pack'>
      <div className='card-container'>
        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='/images/girl.png' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='/images/boy.png' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
        </div>

        <div className='women-card'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='/images/women.png' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
        </div>
      </div>
    </div>

    <div className='contact'>
      <div className='contact-container'>
      <div>
        <h1>Contact Us</h1>
      </div>
      <div className='contact-det'>
        <div className='con-1'>
        <select className='con-1-sub-1' id="options" name="options">
          <option value="option1">General Inqueries</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
          <input className='con-1-sub-1' type='text' placeholder='Your Email'></input>
        </div>
        <div className='con-2'>
          <input className='con-1-sub-1' type='text' placeholder='Your Name'></input>
          <input className='con-1-sub-1' type='text' placeholder='Your Phone Number'></input>
        </div>
      </div>
      <div>
          <textarea className='contact-msg' placeholder="Your message"></textarea>
      </div>
      <div className='contact-btn'>
      <Button variant="outline-success" className='btn-2'>See More</Button>
      </div>
      </div>
    </div>

    </div>
  )
}
