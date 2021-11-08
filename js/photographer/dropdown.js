export const getDropdownTemplate = () => {
  return `

        <span class="sortby-text">Trier par</span>
        <div class="dropdown">
            <ul>
                <li><a>Popularité</a></li>            
                <li><a>Date</a></li>
                <li><a>Titre</a></li>  
            </ul>
        </div>
    
    `;
};

export const displayDropDown = () => {
  const dropDown = document.querySelector("#sortby");
  dropDown.innerHTML = getDropdownTemplate();
  displayDropDown();
};
