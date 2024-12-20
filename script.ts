const form = document.getElementById("resumeform") as HTMLFormElement;
const resumePage = document.getElementById("resumeOutput") as HTMLElement;
const resumePhoto = document.getElementById("resumePhoto") as HTMLImageElement;
const resumeName = document.getElementById("Name") as HTMLHeadingElement;
const resumeEmail = document.getElementById("Email") as HTMLParagraphElement;
const resumePhone = document.getElementById("Phone") as HTMLParagraphElement;
const resumeEducation = document.getElementById("Education") as HTMLParagraphElement;
const resumeWorkExperience = document.getElementById("WorkExperience") as HTMLParagraphElement;
const resumeSkills = document.getElementById("Skills") as HTMLParagraphElement;
const editButton = document.getElementById("editButton") as HTMLParagraphElement;

form.addEventListener("submit", async (event: Event) => {
    event.preventDefault();

    const nameInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const phoneInput = document.getElementById("phone") as HTMLInputElement;
    const degreeInput = document.getElementById("degree") as HTMLInputElement;
    const educationInput = document.getElementById("education") as HTMLInputElement;
    const workExperienceInput = document.getElementById("experience") as HTMLTextAreaElement;
    const skillsInput = document.getElementById("skills") as HTMLTextAreaElement;
    const editButtonInput = document.getElementById("editButton") as HTMLTextAreaElement;

    const photoInput = document.getElementById("photo") as HTMLInputElement;

    const photoFile = photoInput.files ? photoInput.files[0] : null;
    let photoBase64 = '';

    if (photoFile) {
        photoBase64 = await fileToBase64(photoFile);
        resumePhoto.src = photoBase64;
    }

    // Hide the form and show the resume output
    document.getElementById("container")?.classList.add("hidden");
    resumePage.classList.remove("hidden");

    // Populate the resume fields
    resumeName.textContent = nameInput.value;
    resumeEmail.textContent = `Email: ${emailInput.value}`;
    resumePhone.textContent = `Phone: ${phoneInput.value}`;
    resumeEducation.textContent = `${degreeInput.value}, ${educationInput.value}`;
    resumeWorkExperience.textContent = workExperienceInput.value;
    resumeSkills.textContent = skillsInput.value;
});

// Function to convert file to Base64
function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
editButton.addEventListener("click", ()=>{
    updateFormResume();

    document.getElementById("container")?.classList.remove("hidden");
    resumePage.classList.add("hidden");
});
function updateFormResume() {
    const [degree, education] = resumeEducation.textContent?.split(",") || ['', '']; 
    (document.getElementById("name") as HTMLInputElement).value = resumeName.textContent || '';
    (document.getElementById("email") as HTMLInputElement).value = resumeEmail.textContent?.replace('Email: ', '') || '';
    (document.getElementById("phone") as HTMLInputElement).value = resumePhone.textContent?.replace('Phone: ', '') || '';
    (document.getElementById("degree") as HTMLInputElement).value = degree.trim() || ''; 
    (document.getElementById("education") as HTMLInputElement).value = education.trim() || '';
    (document.getElementById("experience") as HTMLTextAreaElement).value = resumeWorkExperience.textContent || ''; 
    (document.getElementById("skills") as HTMLTextAreaElement).value = resumeSkills.textContent || '';
}