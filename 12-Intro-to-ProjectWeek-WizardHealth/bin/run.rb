require_relative '../config/environment'

def log_in
  puts "Please log in with your name:"
  name = gets.chomp
  return Patient.find_by(name: name)
end

def welcome_menu
  puts "  __    __ _                  _                    _ _   _     "
  puts " / / /\\ \\ (_)______ _ _ __ __| |   /\\  /\\___  __ _| | |_| |__  "
  puts " \\ \\/  \\/ / |_  / _` | '__/ _` |  / /_/ / _ \\/ _` | | __| '_ \\ "
  puts "  \\  /\\  /| |/ / (_| | | | (_| | / __  /  __/ (_| | | |_| | | |"
  puts "   \\/  \\/ |_/___\\__,_|_|  \\__,_| \\/ /_/ \\___|\\__,_|_|\\__|_| |_|"
  puts "Please selection from the following options:"
  puts "1. See my appointments"
  puts "2. See all doctors"
  puts "3. Find doctor by name"
  puts "4. Find doctors by specialty"
  puts "5. Emergency Care"
  puts "6. Exit"
  return gets.chomp.to_i
end

def find_doctors_by_specialty(user)
  puts "Type in the specialty you are looking for:"
  specialty = gets.chomp
  doctors = Doctor.all.select{|doctor| doctor.specialty.downcase == specialty.downcase}
  print_doctors(user, doctors)
end

def find_doctor_by_name(user)
  puts "What is the name of the doctor you are looking for?"
  name = gets.chomp
  doctor = Doctor.find_by(name: name)
  if doctor == nil
    puts "We could not find that doctor. Press 1 to try again or 2 to go back to the main menu"
    selection = gets.chomp
    if selection == "1"
      find_doctor_by_name(user)
    else
      selection_menu(user)
    end
  else
    print_doctors(user, [doctor])
  end
end

def make_appointment(user, doctors)
  puts "Type the number of the doctor you would like to make an appointment with:"
  num = gets.chomp.to_i
  doctor = doctors[num - 1]
  puts "You have selected #{doctor.name}. Type Y to proceed or N to go back to the main menu."
  selection = gets.chomp
  if(selection.downcase == 'y')
    puts "Type in the date and time you would like to book your appointment in the format MM-DD-YYYY 00:00"
    time = gets.chomp
    Appointment.create(patient_id: user.id, doctor_id: doctor.id, time: time)
    puts "Your appointment has been booked. See all your appointments below:"
    print_users_appointments(user)
  else
    selection_menu(user)
  end
end

def print_doctors(user, doctors)
  doctors.each_with_index{|doctor, index|
    puts "#{index+1}. #{doctor.name}"
  }
  puts "Would you like to make an appointment with one of these doctors? Type Y to proceed or N to go back to the main menu."
  selection = gets.chomp
  if selection.downcase == "n"
    selection_menu(user)
  elsif selection.downcase == "y"
    make_appointment(user, doctors)
  else
    print_all_doctors(user)
  end
end

def print_all_doctors(user)
  print_doctors(user, Doctor.all)
end

def error(user)
  puts "Error, feature not avaliable at this time. Type anything to go back to the main menu."
  gets.chomp
  selection_menu(user)
end

def print_users_appointments(user)
  user.appointments.each{|appt|
    puts "#{appt.doctor.name} at #{appt.time.strftime("%m-%d-%Y %H:%M")}"
  }
  puts "Type anything to go back to the main menu."
  gets.chomp
  selection_menu(user)
end

def emergency_care(user)
  response = RestClient.get('https://www.potterapi.com/v1/spells?key=$2a$10$81PvGCf30RaGRGJveYEQb.HNmX9HBv1YwytEs2gH4GZvYYHwY2Aa2')
  spells = JSON.parse(response)
  random_spell = spells.sample
  puts "We've cast the #{random_spell["spell"]} on you! Do you feel better now?"
  puts "Type anything to go back to the main menu"
  gets.chomp
  selection_menu(user)
end

def selection_menu(user)
  selection = welcome_menu
  if selection == 1
    print_users_appointments(user)
  elsif selection == 2
    print_all_doctors(user)
  elsif selection == 3
    find_doctor_by_name(user)
  elsif selection == 4
    find_doctors_by_specialty(user)
  elsif selection == 5
    emergency_care(user)
  elsif selection == 6
    exit
  else
    selection_menu(user)
  end
end

def run
  user = log_in
  selection_menu(user)
end

def exit
    #do nothing, end the app
end

run
