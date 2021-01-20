import React, { Component } from 'react'
import './styl.css'



class Form extends Component {
   




    render() {
        return (
            <div>

                <form >
                    <h1>Inscription</h1>
                    <label>FirstName :</label> <input type="text"  placeholder="FirstName..." /><br />
                    <label>LastName :</label> <input type="text"  placeholder="LastName..." /><br />
                    <label>Password :</label> <input type="password"  placeholder="Password..." /><br />
                    <label>Gender :</label><select  defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    <input type="submit" value="Submit" />
                </form>

            </div>
            
        )
    }
}

export default Form
