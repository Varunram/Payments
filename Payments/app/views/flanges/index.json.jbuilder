json.array!(@flanges) do |flange|
  json.extract! flange, :id, :slno, :codeno, :materialgrade, :size, :classc, :tk, :quantity, :kgs, :price
  json.url flange_url(flange, format: :json)
end
