const form = document.querySelector("form");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const formData = new FormData(form);

    const skills = formData.getAll("skills");

    const application = {

        full_name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        dob: formData.get("dob") || null,
        gender: formData.get("gender") || null,
        address: formData.get("address") || null,
        city: formData.get("city") || null,
        state: formData.get("state") || null,
        pincode: formData.get("pincode") || null,

        qualification: formData.get("qualification") || null,
        branch: formData.get("branch") || null,
        college: formData.get("college") || null,
        graduation_year: formData.get("year") || null,
        marks: formData.get("marks") || null,

        position: formData.get("position") || null,
        employment: formData.get("employment") || null,
        work_preference: formData.get("work") || null,
        preferred_location: formData.get("location") || null,

        experience: formData.get("experience") || null,
        previous_company: formData.get("company") || null,
        previous_role: formData.get("previousrole") || null,

        skills: skills,

        expected_salary: formData.get("salary") || null,
        notice_period: formData.get("notice") || null,
        interview_time: formData.get("interview") || null,

        message: formData.get("message") || null,
        linkedin: formData.get("linkedin") || null,
        github: formData.get("github") || null
    };

    console.log("Application:", application);

    const { data, error } = await supabaseClient
        .from("job_applications")
        .insert([application])
      

    if (error) {
        console.error("Supabase Error:", error);

        alert("❌ Application failed:\n" + error.message);
        return;
    }

    console.log("Saved:", data);

    alert("✅ Application submitted successfully!");

    form.reset();
});