task :default => [:ts, :test]

# source files
tss          = FileList.new("src/**/*.ts")
specs        = tss.sub("src/", "spec/").ext(".spec.coffee")

# task definition
task :ts   => tss.ext(".js")
task :test => specs.ext(".txt")


## build rules ##

# compile typescript
rule '.js' => '.ts' do |t|
  puts "\n--- compiling typescripts --\n"
  sh "tsc #{t.source} -noImplicitAny --module commonjs"
end

# test and source dependency
rule '.spec.coffee' => proc{|spec| spec.sub("spec/", "src/").sub(".spec.coffee", ".js")} do |t|
  sh "touch #{t.name}"
end

# test execution via browsefy and jasmine
rule '.spec.txt' => proc{|res| res.sub(".spec.txt", ".spec.coffee")} do |t|
  puts "\n--- browserifying --\n"

  sh "browserify -t coffeeify #{t.source} -o #{t.source.sub(".coffee", ".js")}"

  puts "\n\n--- runnning jasmin --\n"

  sh "jasmine #{t.source.sub(".coffee", ".js")} > #{t.name}; cat #{t.name}"
end
