class Doctor < ActiveRecord::Base

    belongs_to :hospital 
    has_many :doctor_patients
    has_many :patients, through: :doctor_patients
    
    # def hospital
    #     # return the hospital this doctor works at

    #     # all_hospitals = Hospital.all 
    #     Hospital.find(self.hospital_id)

    # end

end