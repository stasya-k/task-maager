FactoryBot.define do
    sequence :string, aliases: [:first_name, :last_name, :password, :name, :description, :state] do |n|
      "string#{n}"
    end
    sequence :email do |n|
        "person#{n}@example.com"
    end
    sequence :avatar do |n|
        "path/to/avatar#{n}"
    end
    sequence :expired_at do |n|
        Date.today.next_day(n)
    end
end
