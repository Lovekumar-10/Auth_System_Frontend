// // utils/passwordValidator.js
// import zxcvbn from "zxcvbn";

// export const validatePassword = (password) => {
//   if (!password) return { valid: false, message: "Password is required" };

//   if (password.length < 8)
//     return { valid: false, message: "Password must be at least 8 characters" };

//   if (!/[A-Z]/.test(password))
//     return { valid: false, message: "Password must include an uppercase letter" };

//   if (!/[a-z]/.test(password))
//     return { valid: false, message: "Password must include a lowercase letter" };

//   if (!/[0-9]/.test(password))
//     return { valid: false, message: "Password must include a number" };

//   if (!/[@$!%*?&]/.test(password))
//     return { valid: false, message: "Password must include a special character" };

//   const strength = zxcvbn(password);
//   return {
//     valid: strength.score >= 3,
//     score: strength.score, // 0-4
//     suggestions: strength.feedback.suggestions,
//   };
// };


// import zxcvbn from "zxcvbn";

// export const validatePassword = (password) => {
//   // 1. Define physical requirements
//   const requirements = [
//     { label: 'At least 8 characters', met: password.length >= 8 },
//     { label: 'At least 1 number', met: /[0-9]/.test(password) },
//     { label: 'At least 1 lowercase letter', met: /[a-z]/.test(password) },
//     { label: 'At least 1 uppercase letter', met: /[A-Z]/.test(password) },
//     { label: 'At least 1 special character', met: /[!-/:-@[-`{-~]/.test(password) },
//   ];

//   if (!password) {
//     return {
//       isValid: false,
//       score: 0,
//       strengthText: "Enter a password",
//       strengthColor: "bg-slate-200",
//       progressWidth: "0%",
//       requirements: requirements.map(r => ({ ...r, met: false }))
//     };
//   }

//   // 2. Calculate score based on met requirements (0 to 5)
//   const metCount = requirements.filter(req => req.met).length;
  
//   // 3. Optional: Still run zxcvbn in background for security check
//   const zxcvbnResult = zxcvbn(password);

//   // 4. Map the score (metCount) to the UI Config
//   const configs = {
//     0: { text: 'Weak', color: 'bg-slate-200', width: '0%' },
//     1: { text: 'Weak password', color: 'bg-red-500', width: '20%' },
//     2: { text: 'Medium password!', color: 'bg-orange-500', width: '40%' },
//     3: { text: 'Strong password!!', color: 'bg-amber-500', width: '60%' },
//     4: { text: 'Very Strong password!!!', color: 'bg-amber-700', width: '80%' },
//     5: { text: 'Excellent password!!!!', color: 'bg-emerald-500', width: '100%' },
//   };

//   const currentConfig = configs[metCount];

//   return {
//     requirements,
//     score: metCount,
//     strengthText: currentConfig.text,
//     strengthColor: currentConfig.color,
//     progressWidth: currentConfig.width,
//     // isValid only if ALL 5 rules are met AND zxcvbn entropy is okay (score > 1)
//     isValid: metCount === 5 && zxcvbnResult.score >= 2 
//   };
// };



import zxcvbn from "zxcvbn";

export const validatePassword = (password) => {
  const requirements = [
    { label: 'At least 8 characters', met: password.length >= 8 },
    { label: 'At least 1 number', met: /[0-9]/.test(password) },
    { label: 'At least 1 lowercase letter', met: /[a-z]/.test(password) },
    { label: 'At least 1 uppercase letter', met: /[A-Z]/.test(password) },
    { label: 'At least 1 special character', met: /[!-/:-@[-`{-~]/.test(password) },
  ];

  if (!password) {
    return {
      isValid: false,
      requirements: requirements.map(r => ({ ...r, met: false }))
    };
  }

  // Final check: All 5 requirements met + zxcvbn entropy check for safety
  const metCount = requirements.filter(req => req.met).length;
  const entropy = zxcvbn(password).score;

  return {
    requirements,
    // Valid only when all 5 boxes are green
    isValid: metCount === 5 && entropy >= 2 
  };
};