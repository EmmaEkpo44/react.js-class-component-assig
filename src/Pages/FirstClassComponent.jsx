import React, { Component } from 'react'
import { Card } from '../Components/Card'
import './FirstClassComponent.css'


export default class FirstClassComponent extends Component {
  render() {
    return (
      <> 
        
        
        <div className='container my-3 mx-auto'>
            <h3 className='text-center text-light' style={{fontWeight:"500"}}>Welcome To New App.</h3>
            <div className='container'>
                <div className='row'>
                  <div className='col-lg-6'>
                    <Card color="white" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis placeat cumque numquam, obcaecati aperiam illum voluptatibus illo voluptates sapiente dolores sequi maiores ducimus dolorem aliquid exercitationem ad commodi? Doloremque, tenetur?" />
                  </div>
                  <div className='col-lg-6'>
                    <div className='row p-3'>
                      <div className='col-6 p-4'><Card img="https://images.unsplash.com/photo-1603988089669-c041ac2fe196?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"  color="white" fontSize="15px" content="Lorem ipsum dolor sit amet" /></div>
                      <div className='col-6 my-4'><Card img="https://media.istockphoto.com/photos/beautiful-model-woman-with-trendy-fashionable-makeup-wearing-red-picture-id1286543144?k=20&m=1286543144&s=612x612&w=0&h=Vc7qA4q1rUXeEJcHQToHHsUOsXSxZzEn2yxkYR33AuM=" color="white" fontSize="15px" content="Lorem ipsum dolor sit amet" height="145px"  /></div>
                    </div>
                  </div>
                </div>
            </div>
        </div>

        <div className='container-fluid  bg-info '>
                <div className='row p-5'>
                  <div className='col-lg-12'>
                    <Card content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis placeat cumque numquam, obcaecati aperiam illum voluptatibus illo voluptates sapiente dolores sequi maiores ducimus dolorem aliquid exercitationem ad commodi? Doloremque, tenetur?" color="white"/>
                  </div>
                  <div className='mx-auto col-lg-2'>
                    <button className='btn btn-main text-light form-control btn-dark'>Check Out</button>
                  </div>
                </div>
        </div>

        <div className='container-fluid my-3'>
            <div className='container'>
                <div className='row p-3'>
                  <h4 className='text-light text-center' style={{fontWeight:"500"}}>APP Screenshols</h4>
                  <p className='text-secondary text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laudantium impedit reprehenderit modi ex eum maiores officiis incidunt quidem, sapiente nesciunt, asperiores ratione nihil? Beatae magnam aut ab maxime libero?
                  </p>
                  <div className='col-lg-3 my-5'>
                    <Card backgroundColor="grey" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laudantium impedit reprehenderit modi ex eum maiores officiis officiis officiis officiis" color="white" fontSize="15px" />
                  </div>
                  
                  <div className='col-lg-3 my-5'>
                    <Card backgroundColor="grey"   color="white" fontSize="15px" content="We designed a banking app for your busy lifestyle, and we’ll give you a free debit card to go with it. That’s all you need to make the right officiis officiis officiis officiis"  />
                  </div>

                  <div className='col-lg-3 my-5'>
                    <Card backgroundColor="grey" content="Save it, spend it, send it. It’s up to you. Whatever you choose to do with your money, we’ll make sure it’s done better and free of charge. We take responsibility for that." color="white" fontSize="15px"/>
                  </div>

                  <div className='col-lg-3 my-5'>
                    <Card backgroundColor="grey" content="You can’t avoid spending. That’s how you pay for your needs. But we can help you put money away every time you pay for something. Just say No to drugs avoid spending." color="white" fontSize="15px"/>
                  </div>
                </div>
            </div>
        </div>

        <div className='container-fluid my-5 bg-primary'>
            <div className='container'>
                <div className='row p-5'>
                  <h4 className='text-light text-center' style={{fontWeight:"500"}}>APP Pricing</h4>
                 
                  <div className='col-lg-4 my-5'>
                    <Card backgroundColor="white" fontSize={"larger"} heading="$60" content={"Quasi laudantium impedit reprehenderit modi ex eum maiores officiis incidunt quidem, sapiente nesciunt"}/>
                    <div className='mx-auto col-lg-10 my-2'>
                      <button className='btn btn-main text-light form-control btn-info'>Check Out</button>
                    </div>
                  </div>
                  
                  <div className='col-lg-4 my-5'>
                    <Card backgroundColor="white" fontSize={"larger"} heading="$120" content={"Quasi laudantium impedit reprehenderit modi ex eum maiores officiis incidunt quidem, sapiente nesciunt"}/>
                    <div className='mx-auto col-lg-10 my-2'>
                      <button className='btn btn-main text-light form-control btn-info'>Check Out</button>
                    </div>
                  </div>

                  <div className='col-lg-4 my-5'>
                    <Card backgroundColor="white" fontSize={"larger"} heading="$200" content={"Quasi laudantium impedit reprehenderit modi ex eum maiores officiis incidunt quidem, sapiente nesciunt"}/>
                    <div className='mx-auto col-lg-10 my-2'>
                      <button className='btn btn-main text-light form-control btn-info'>Check Out</button>
                    </div>
                  </div>

                </div>
            </div>
        </div>

      </>
    )
  }
}

