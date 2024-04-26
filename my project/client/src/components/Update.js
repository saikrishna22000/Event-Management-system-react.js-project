import { Button } from "@mui/material";
import axios from 'axios';

function Update() {
    function handUpdate(event){
        alert(document.getElementsByName ('un')[0].value);
        event.preventDefault();
        axios.post('http://localhost:8081/Update',{
            un:document.getElementsByName('un')[0].value,
            pw:document.getElementsByName('pw')[0].value,
            ro:document.getElementsByName('ro')[0].value,
            em:document.getElementsByName('em')[0].value
        }).then((response)=>{
            console.log(response.data);
        })
    }
    return (
        <div>
            <form>
                Username:<input type="text" name="un"/><br></br>
                Password:<input type="password" name="pw"/><br></br>
                role:<input type="role" name="ro"/><br></br>
                email:<input type="email" name="em"/><br></br>
                <Button onClick={handUpdate}>Update</Button>
            </form>
        </div>
    );
}
export default Update;
