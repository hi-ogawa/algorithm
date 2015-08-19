task :default => [:ts, :test]

tss   = FileList.new("src/**/*.ts")
jss   = tss.ext(".js")
specs = FileList.new("spec/**/*.spec.coffee")

task :ts   => jss
task :test => "spec/support/result.txt"


rule '.js' => '.ts' do |t|
  sh "tsc #{t.source} -noImplicitAny --module commonjs; exit 0"
end


file "spec/support/result.txt" => [jss, specs] do
  sh "browserify -t coffeeify #{specs} -o spec/support/bundle.js"
  sh "jasmine spec/support/bundle.js > spec/support/result.txt; cat spec/support/result.txt"
end
