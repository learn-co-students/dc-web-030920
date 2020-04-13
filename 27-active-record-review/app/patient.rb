class Patient < ActiveRecord::Base

    has_many :doctor_patients
    has_many :doctors, through: :doctor_patients

    def self.check_for_name(name_arg)

        # see if there is a patient by that name in the db
        patient = Patient.find_by(name: name_arg)
        # if there is, print "we have that patient"
        if patient
            print "We have that patient"
            return patient
        # else, print "that name does not exist"
        else
            print "That name does not exist"
            return nil
        end

    end

end