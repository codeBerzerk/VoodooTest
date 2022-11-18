const standardSelect = document.getElementsByClassName('standard-select');
let i;
for (i = 0; i < standardSelect.length; i++) {
    standardSelect[i].style.display = 'none';
}

const customSelect1 = document.createElement('select');
customSelect1.innerHTML =`<option value="" disabled selected hidden>Practice / Institution*</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                    <option value="4">Option 4</option>
                    <option value="5">Option 5</option>`;

const customSelect2 = document.createElement('select');
customSelect2.innerHTML =`<option value="" disabled selected hidden>Medical Profession*</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                    <option value="4">Option 4</option>
                    <option value="5">Option 5</option>`;
const selectContainer = document.getElementsByClassName('contact-container__select-container');

    selectContainer[0].appendChild(customSelect1);
    selectContainer[1].appendChild(customSelect2);




