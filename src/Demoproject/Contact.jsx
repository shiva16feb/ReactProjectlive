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
              <label for="fullname" className="form-label">FullName</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <label for="mobilenum" className="form-label">Phone number</label>
                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
               <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                 <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                    <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                     <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3">
                     <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                       </div>
                    <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
             <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;