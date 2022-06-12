module StripHeaders
  def strip_headers(input)
    for x in 1..6
      input = input.gsub(/<h#{x}.*>.*<\/h#{x}>/, "")
    end
    input
  end
end

Liquid::Template.register_filter(StripHeaders)