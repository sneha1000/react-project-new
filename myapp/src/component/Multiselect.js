import React from 'react';
function multiselect(){
    return(
        
        <div className="Multi">
            <form>
                <select name="select" multiple classname='multiselect'  multiselect-search="true">
                <option>Australia</option>
                   <option>Bermuda</option>
                    <option>Canada</option>
                    <option>Cameroon</option>
                   <option>Denmerk</option>
                    <option>France</option>
                    <option>Finland</option>
                    <option>Germany</option>
                 
                 </select>

            </form>
            </div>
        

    );
}

export default multiselect

