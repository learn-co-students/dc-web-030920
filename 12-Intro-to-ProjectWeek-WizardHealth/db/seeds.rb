require_relative '../config/environment.rb'
require 'rest-client'
require 'json'

Patient.destroy_all
Doctor.destroy_all
Appointment.destroy_all

specialty = ["Optometry", "Cardiology", "Podiatry", "Dermatology"]

Doctor.create(name: "Dr. Albus Dumbledore", specialty: specialty.sample)
Doctor.create(name: "Dr. Minerva McGonagall", specialty: specialty.sample)
Doctor.create(name: "Dr. Alastor Moody", specialty: specialty.sample)
Doctor.create(name: "Dr. Arthur Weasley", specialty: specialty.sample)

Patient.create(name: "Ann")
Patient.create(name: "Paul")

Appointment.create(time: "03-01-2020 15:00", doctor_id: Doctor.all.sample.id, patient_id: Patient.all.sample.id)
Appointment.create(time: "03-02-2020 14:00", doctor_id: Doctor.all.sample.id, patient_id: Patient.all.sample.id)
Appointment.create(time: "03-03-2020 13:00", doctor_id: Doctor.all.sample.id, patient_id: Patient.all.sample.id)
Appointment.create(time: "03-04-2020 14:30", doctor_id: Doctor.all.sample.id, patient_id: Patient.all.sample.id)
Appointment.create(time: "03-05-2020 15:30", doctor_id: Doctor.all.sample.id, patient_id: Patient.all.sample.id)


# response = RestClient.get('https://www.potterapi.com/v1/characters?key=$2a$10$81PvGCf30RaGRGJveYEQb.HNmX9HBv1YwytEs2gH4GZvYYHwY2Aa2&ministryOfMagic=true')
# data = JSON.parse(response)
# data.each{|character|
#   dr_name = "Dr. " + character["name"]
#   Doctor.create(name: dr_name, specialty: specialty.sample)
# }
#
# 5.times do
#   Patient.create(name: Faker::Name.name)
# end
