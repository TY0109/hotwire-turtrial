class Cat < ApplicationRecord
  # ransackで検索対象にしているモデル内にホワイトリストを登録するメソッドを作成し、検索に使用するカラムを記述する必要があります。
  def self.ransackable_attributes(auth_object = nil)
    ["age", "name"]
  end

  # 名前: 必須
  validates :name, presence: true

  # 年齢: 必須 + integer + 0以上
  validates :age, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
end
