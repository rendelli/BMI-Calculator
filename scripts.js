function rateBMI(bmiResult){
    if (isNaN(bmiResult)) {
        console.error("Invalid BMI input. Please enter a valid number.");
        return;
    }
    if(bmiResult <= 18.5) {
        let answerBmi = "Underweight: BMI < 18.5 This category indicates that an individual may be at risk of health problems related to being underweight, such as malnutrition or osteoporosis."

        let paragraphAnswer = document.createElement("p")
        paragraphAnswer.classList.add("answerBmi")
        paragraphAnswer.innerHTML = answerBmi
        
        document.querySelector(".form-bmi").appendChild(paragraphAnswer);

    } else if (bmiResult >= 18.5 && bmiResult <= 24.9 ){
        let answerBmi ="Normal weight: BMI = 18.5–24.9 This range is generally considered healthy and low-risk for chronic diseases like heart disease, diabetes, and certain cancers."

        let paragraphAnswer = document.createElement("p")
        paragraphAnswer.classList.add("answerBmi")
        paragraphAnswer.innerHTML = answerBmi
        
        document.querySelector(".form-bmi").appendChild(paragraphAnswer);
        
    } else if (bmiResult >= 25 && bmiResult <= 29.9){
        let answerBmi = "Overweight: BMI = 25-29.9 This category suggests that an individual may be at risk of developing weight-related health issues, such as cardiovascular disease or type 2 diabetes."

        let paragraphAnswer = document.createElement("p")
        paragraphAnswer.classList.add("answerBmi")
        paragraphAnswer.innerHTML = answerBmi
        
        document.querySelector(".form-bmi").appendChild(paragraphAnswer);

    } else {
        let answerBmi = "Obese: BMI ≥ 30 Being obese can significantly increase the risk of chronic diseases like heart disease, stroke, and certain cancers."

        let paragraphAnswer = document.createElement("p")
        paragraphAnswer.classList.add("answerBmi")
        paragraphAnswer.innerHTML = answerBmi
        
        document.querySelector(".form-bmi").appendChild(paragraphAnswer);
    }
}

function calcBmi() {
    let existingParagraph = document.querySelector(".resultBmi")
    let existingAnswer = document.querySelector(".answerBmi")
    if(existingParagraph){
        existingParagraph.remove()
        existingAnswer.remove()
    }

    let inputKg = document.getElementById('input-kg').value;
    let inputHeight = document.getElementById('input-height').value;

    if (inputKg == "" || inputHeight == ""){
        
    } else {
    let bmi = (inputKg / (inputHeight * inputHeight));
    bmi.toFixed(2);

    let paragraph = document.createElement("p");
    paragraph.classList.add("resultBmi")
    paragraph.innerHTML = bmi.toFixed(2);

    document.querySelector(".form-bmi").appendChild(paragraph);
    
    rateBMI(bmi)


    document.getElementById('input-kg').value = "";
    document.getElementById('input-height').value = "";
    }
}
