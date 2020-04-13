
Doctor.destroy_all
Patient.destroy_all
Hospital.destroy_all

sacred_heart = Hospital.find_or_create_by(name: "Sacred Heart")

turk = Doctor.find_or_create_by(name: "Dr Turk", 
    specialty: "Surgery", hospital: sacred_heart)
jd = Doctor.find_or_create_by(name: "Dr Dorian", 
    specialty: "Internal Medicine", hospital_id: sacred_heart.id)
reid = Doctor.find_or_create_by(name: "Dr Reid", 
    specialty: "Endocrinology", hospital_id: sacred_heart.id)

wilke = Patient.create(name: "Mrs Wilke")
johnny = Patient.create(name: "Johnny the Tackling Alhzheimer's Patient")