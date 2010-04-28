class User < ActiveRecord::Base
  acts_as_authentic
  belongs_to :squadron
  
  def name
    return "#{self.first_name} #{self.surname}"
  end
  
  def joined_on
    return self.created_at.strftime("%A %d %B %Y")
  end
  
end
