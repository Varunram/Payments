json.array!(@pipes) do |pipe|
  json.extract! pipe, :id, :slno, :codeno, :description, :typec, :materialgrade, :inch, :od, :tk, :lg, :quantity, :price
  json.url pipe_url(pipe, format: :json)
end
