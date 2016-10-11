json.array!(@fittings) do |fitting|
  json.extract! fitting, :id, :slno, :codeno, :typec, :materialgrade, :itemdescription, :size, :sch, :lr, :quantity, :price
  json.url fitting_url(fitting, format: :json)
end
