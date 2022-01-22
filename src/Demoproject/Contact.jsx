import React from 'react'

const Contact = () => {
  return (
    <>
      <h1 className='text-center mt-1'>Contact page</h1>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='col-xl-6 col-md-6 mx-auto'>
            <form>
              <div className="mb-3">
              <label  className="form-label">FullName</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <label className="form-label">Phone number</label>
                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
               <label  className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                 <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                    <div className="mb-3">
                    <label  className="form-label">Password</label>
                     <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                     <label className="form-label">Example textarea</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                       </div>
                    <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" >check me out</label>
              </div>
             <button type="submit" className="btn btn-outline-primary">Submit</button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;