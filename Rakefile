task :default => [:ts, :test]

tss   = FileList.new("src/**/*.ts")
jss   = tss.ext(".js")
specs = FileList.new("spec/**/*.spec.coffee")

task :ts   => jss
task :test => "spec/support/result.txt"


rule '.js' => '.ts' do |t|
  puts "\n\n--- compiling typescript --\n"
  sh "tsc #{t.source} -noImplicitAny --module commonjs"
end


file "spec/support/result.txt" => [jss, specs] do
  puts "\n\n--- browserifying --\n"
  sh "browserify -t coffeeify #{specs} -o spec/support/bundle.js"
  puts "\n\n--- runnning jasmin --\n"
  sh "jasmine spec/support/bundle.js > spec/support/result.txt; cat spec/support/result.txt"
end
