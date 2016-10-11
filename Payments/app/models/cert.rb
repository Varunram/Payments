class Cert < ActiveRecord::Base
  mount_uploader :attachment, AttachmentUploader
end
