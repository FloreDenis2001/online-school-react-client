import React from 'react'

export default function Login() {
  return (
  
    <main className="login-container">
	   <div className="main-login">  	
		 <input type="checkbox" id="chk" aria-hidden="true" />

			<div className="signup">
				<form>
					<label htmlFor="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="First name"/>
					<input type="text" name="txt" placeholder="Second name"/>
					<input type="number" min="18" max="25" name="txt" placeholder="Age" />

					<input type="email" name="email" placeholder="Email" />
					<input type="password" name="pswd" placeholder="Password" />
					<button>Sign up</button>
				</form>
			</div>

			<div className="login">
				<form>
					<label htmlFor="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" />
					<input type="password" name="pswd" placeholder="Password" />
					<button>Login</button>
				</form>
			</div>
	</div>
     </main>
  )
}

