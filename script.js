var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var form = document.getElementById("resumeform");
var resumePage = document.getElementById("resumeOutput");
var resumePhoto = document.getElementById("resumePhoto");
var resumeName = document.getElementById("Name");
var resumeEmail = document.getElementById("Email");
var resumePhone = document.getElementById("Phone");
var resumeEducation = document.getElementById("Education");
var resumeWorkExperience = document.getElementById("WorkExperience");
var resumeSkills = document.getElementById("Skills");
var editButton = document.getElementById("editButton");
form.addEventListener("submit", function (event) { return __awaiter(_this, void 0, void 0, function () {
    var nameInput, emailInput, phoneInput, degreeInput, educationInput, workExperienceInput, skillsInput, editButtonInput, photoInput, photoFile, photoBase64;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                event.preventDefault();
                nameInput = document.getElementById("name");
                emailInput = document.getElementById("email");
                phoneInput = document.getElementById("phone");
                degreeInput = document.getElementById("degree");
                educationInput = document.getElementById("education");
                workExperienceInput = document.getElementById("experience");
                skillsInput = document.getElementById("skills");
                editButtonInput = document.getElementById("editButton");
                photoInput = document.getElementById("photo");
                photoFile = photoInput.files ? photoInput.files[0] : null;
                photoBase64 = '';
                if (!photoFile) return [3 /*break*/, 2];
                return [4 /*yield*/, fileToBase64(photoFile)];
            case 1:
                photoBase64 = _b.sent();
                resumePhoto.src = photoBase64;
                _b.label = 2;
            case 2:
                // Hide the form and show the resume output
                (_a = document.getElementById("container")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
                resumePage.classList.remove("hidden");
                // Populate the resume fields
                resumeName.textContent = nameInput.value;
                resumeEmail.textContent = "Email: ".concat(emailInput.value);
                resumePhone.textContent = "Phone: ".concat(phoneInput.value);
                resumeEducation.textContent = "".concat(degreeInput.value, ", ").concat(educationInput.value);
                resumeWorkExperience.textContent = workExperienceInput.value;
                resumeSkills.textContent = skillsInput.value;
                return [2 /*return*/];
        }
    });
}); });
// Function to convert file to Base64
function fileToBase64(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onloadend = function () { return resolve(reader.result); };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
editButton.addEventListener("click", function () {
    var _a;
    updateFormResume();
    (_a = document.getElementById("container")) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
    resumePage.classList.add("hidden");
});
function updateFormResume() {
    var _a, _b, _c;
    var _d = ((_a = resumeEducation.textContent) === null || _a === void 0 ? void 0 : _a.split(",")) || ['', ''], degree = _d[0], education = _d[1];
    document.getElementById("name").value = resumeName.textContent || '';
    document.getElementById("email").value = ((_b = resumeEmail.textContent) === null || _b === void 0 ? void 0 : _b.replace('Email: ', '')) || '';
    document.getElementById("phone").value = ((_c = resumePhone.textContent) === null || _c === void 0 ? void 0 : _c.replace('Phone: ', '')) || '';
    document.getElementById("degree").value = degree.trim() || '';
    document.getElementById("education").value = education.trim() || '';
    document.getElementById("experience").value = resumeWorkExperience.textContent || '';
    document.getElementById("skills").value = resumeSkills.textContent || '';
}
