import React from 'react'

export function ToggleColor(){

    function toggleColor(){
        const body = document.getElementById("body");
        const toggle_btn = document.getElementById("toggle-btn");
        let light = body.classList.contains("light-mode");

        if(light){
            body.classList.remove("light-mode");
            toggle_btn.innerText = "Light Mode";
            toggle_btn.classList.remove("dark-mode-btn");
            toggle_btn.classList.add("light-mode-btn");
        }else{
            body.classList.add('light-mode');
            toggle_btn.innerText = "Dark Mode";
            toggle_btn.classList.remove("light-mode-btn");
            toggle_btn.classList.add("dark-mode-btn");
        }
    }

  return (
      <div className="toggle-color">
        <button onClick={()=> toggleColor()} id="toggle-btn">
            Light Mode
        </button>
      </div>

  )
}
